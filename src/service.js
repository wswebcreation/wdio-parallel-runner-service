import { ConfigParser } from '@wdio/config';
import { readFileSync, removeSync } from 'fs-extra';
import { parseSync } from '@babel/core';
import logger from '@wdio/logger';
import { findCalleeNameIndexes } from './ast.methods';
import { createSingleTestFiles } from './utils';

const log = logger('wdio-parallel-runner-service')

export default class ParallelRunnerLauncher {
    onPrepare(config) {
        /**
         * Challenges:
         * - babel / typescript
         * - suites/cli arg specs / excludes
         * - check Mocha TDD
         * - fit/xit/xdescribe/fdecribe => Done!!
         */
        const configParser = new ConfigParser();

        // Get the specs
        const specs = config.specs;
        const exclude = config.exclude;
        const currentSpecs = configParser.getSpecs(specs, exclude);

        // Make a copy of the original spec and empty the current one
        config.originalSpecs = config.specs;
        config.specs = [];

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
                    (currentItIndex, index) => config.specs.push(`${spec}.${++index}-${itIndexes.length}.js`)
                );
            } else {
                log.warn(` WARNING, THIS SPEC FILE: '${spec}' CONTAINS MULTIPLE DESCRIBES AND CAN NOT BE SPLIT!`);
                config.specs.push(spec);
            }
        });
    }

    onComplete(exitCode, config) {
        // When done remove the files and clean up the config.specs
        config.specs.forEach(spec => removeSync(spec));
        config.specs = config.originalSpecs;
        delete config.originalSpecs;
    }
}
