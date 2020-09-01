import { ConfigParser } from '@wdio/config';
import { readFileSync, removeSync } from 'fs-extra';
import { parseSync } from '@babel/core';
import logger from '@wdio/logger';
import { findCalleeNameIndexes } from './ast.methods';
import { createSingleTestFiles } from './utils';

const log = logger('wdio-parallel-runner-service');

export default class ParallelRunnerLauncher {
    constructor (options, capabilities, config) {
        this.config = config;
    }
    onPrepare() {
        /**
         * Challenges:
         * - babel / typescript
         * - suites/cli arg specs / excludes
         * - check Mocha TDD
         * - fit/xit/xdescribe/fdecribe => Done!!
         */
        const configParser = new ConfigParser();

        // Get the specs
        const specs = this.config.specs;
        const exclude = this.config.exclude;
        const currentSpecs = configParser.getSpecs(specs, exclude);

        // Make a copy of the original spec and empty the current one
        this.config.originalSpecs = this.config.specs;
        this.config.specs = [];

        // Now iterate over each spec and split it into single it's per file
        currentSpecs.forEach(spec => {
            const file = readFileSync(spec, 'utf8');
            // @TODO: this is crappy, but enough for an initial POC
            const singleDescribe = file.match(/(describe\()/g).length === 1;

            if (singleDescribe) {
                const ast = parseSync(file);
                const describeIndex = findCalleeNameIndexes(ast.program.body, 'describe');
                // console.log('describeIndex = ', describeIndex)
                const itIndexes = findCalleeNameIndexes(
                    ast.program.body[describeIndex].expression.arguments[1].body.body,
                    'it',
                );
                // console.log('itIndexes = ', itIndexes)

                // Now do the magic
                createSingleTestFiles(ast, describeIndex, itIndexes, spec);
                // Push the new specs into the config
                itIndexes.forEach(
                    (currentItIndex, index) => this.config.specs.push(`${spec}.${++index}-${itIndexes.length}.js`)
                );
            } else {
                log.warn(`WARNING, THIS SPEC FILE: '${spec}' CONTAINS MULTIPLE DESCRIBES AND CAN NOT BE SPLIT!`);
                this.config.specs.push(spec);
            }
        });
    }

    onComplete() {
        this.config.specs.forEach(spec => {
            log.info(`Trying to remove temporary file: '${spec}'.`);

            try {
                removeSync(spec);
            } catch (error){
                log.warn(`Not able to remove temporary file: '${spec}' due to an error.`);
                log.warn(error);
            }
        });
    }
}
