import * as fs from 'fs-extra';
import { ConfigParser } from '@wdio/config';
import * as babel from '@babel/core';
import logger from '@wdio/logger';
import ParallelRunnerLauncher from '../src/launcher';
import * as astMethods from '../src/ast.methods';
import * as utils from '../src/utils';

const log = logger('test-wdio-parallel-runner-service');
const logInfoSpy = jest.spyOn(log, 'info').mockImplementation((string) => string);
const logWarnSpy = jest.spyOn(log, 'warn').mockImplementation((string) => string);
const configParser = new ConfigParser();
let astMethodsSpy, utilsSpy;

jest.mock('fs-extra');
jest.mock('@wdio/config');
jest.mock('@babel/core');

beforeEach(() => {
    fs.removeSync.mockClear();
    fs.readFileSync.mockClear();
    babel.parseSync.mockClear();
    configParser.getSpecs.mockClear();
    log.info.mockClear();
    log.warn.mockClear();
});

describe('onPrepare', () => {
    const options = {};
    const caps = [{}];
    const specs = ['./foo.js', './bar.js', './foo.bar.js']
    const config = {
        specs,
        exclude: []
    };

    it('should not split a file if no describes are provided', () => {
        const logWarnings = [];
        const service = new ParallelRunnerLauncher(options, caps, config);
        fs.readFileSync.mockImplementation(() => 'string');

        service.onPrepare();

        // Store all warnings
        config.specs.forEach(spec => {
            logWarnings.push([`WARNING, THIS SPEC FILE: '${spec}' CONTAINS MULTIPLE DESCRIBES AND CAN NOT BE SPLIT!`]);
        });
        expect(fs.readFileSync).toHaveBeenCalledTimes(3);
        expect(logWarnSpy.mock.calls).toEqual(logWarnings);
        expect(service.config.specs).toEqual(config.specs);
        expect(service.config.originalSpecs).toEqual(config.originalSpecs);
    });

    it('should not split a file if multiple describes are provided', () => {
        const logWarnings = [];
        const service = new ParallelRunnerLauncher(options, caps, config);
        fs.readFileSync.mockImplementation(() => 'describe("foo", ()=>{});\n' +
            'fdescribe("foo", ()=>{});\n' +
            'xdescribe("foo", ()=>{});'
        );

        service.onPrepare();

        // Store all warnings
        config.specs.forEach(spec => {
            logWarnings.push([`WARNING, THIS SPEC FILE: '${spec}' CONTAINS MULTIPLE DESCRIBES AND CAN NOT BE SPLIT!`]);
        });
        expect(fs.readFileSync).toHaveBeenCalledTimes(3);
        expect(logWarnSpy.mock.calls).toEqual(logWarnings);
        expect(service.config.specs).toEqual(config.specs);
        expect(service.config.originalSpecs).toEqual(config.originalSpecs);
    });

    it('should be able to parse the specs', () => {
        const logWarnings = [
            ['WARNING, THIS SPEC FILE: \'./foo.js\' CONTAINS MULTIPLE DESCRIBES AND CAN NOT BE SPLIT!'],
            ['WARNING, THIS SPEC FILE: \'./foo.bar.js\' CONTAINS MULTIPLE DESCRIBES AND CAN NOT BE SPLIT!']
        ];
        const describeIndex = [0];
        const itIndexes = [2, 3];
        fs.readFileSync
            .mockImplementationOnce(() => 'string')
            .mockImplementationOnce(() => 'describe("foo", ()=>{});')
            .mockImplementationOnce(() => 'string');
        babel.parseSync.mockImplementationOnce(() => (
            {
                program: { body: [{ expression: { arguments: [{ body: { body: [] } }, { body: { body: [] } }] } }] }
            }
        ));
        astMethodsSpy = jest.spyOn(astMethods, 'findCalleeNameIndexes')
            .mockReturnValueOnce(describeIndex)
            .mockReturnValueOnce(itIndexes);
        utilsSpy = jest.spyOn(utils, 'createSingleTestFiles').mockReturnValue();
        const service = new ParallelRunnerLauncher(options, caps, config);

        service.onPrepare();

        expect(fs.readFileSync).toHaveBeenCalledTimes(3);
        expect(babel.parseSync).toHaveBeenCalledTimes(1);
        expect(astMethodsSpy).toHaveBeenCalledTimes(2);
        expect(utilsSpy).toHaveBeenCalledTimes(1);
        expect(logWarnSpy.mock.calls).toEqual(logWarnings);
        expect(service.config.specs).toEqual([
            './foo.js',
            './bar.js.1-2.js',
            './bar.js.2-2.js',
            './foo.bar.js'
        ]);
        expect(service.config.originalSpecs).toEqual(specs);

        astMethodsSpy.mockClear();
        utilsSpy.mockClear();
    });
});

describe('onComplete', () => {
    const options = {};
    const caps = [{}];
    const config = {
        specs: ['./foo.js', './bar.js', './foo.bar.js']
    };

    it('should be able to delete all temporary spec files and log all steps', () => {
        const service = new ParallelRunnerLauncher(options, caps, config);

        service.onComplete(0, config);

        config.specs.forEach(spec =>
            expect(logInfoSpy).toHaveBeenCalledWith(`Trying to remove temporary file: '${spec}'.`)
        );
        expect(fs.removeSync).toHaveBeenCalledTimes(3);
    });

    it('should be able to log the error when the files can not be removed', () => {
        const service = new ParallelRunnerLauncher(options, caps, config);
        const logInfos = [];
        const logWarnings = [];
        // Mock the errors
        fs.removeSync.mockImplementation(() => {
            throw new Error('some error')
        });

        // Call the method
        service.onComplete(0, config);

        // Store all warnings / info logs
        config.specs.forEach(spec => {
            logInfos.push([`Trying to remove temporary file: '${spec}'.`]);
            logWarnings.push([`Not able to remove temporary file: '${spec}' due to an error.`]);
            logWarnings.push([new Error('some error')]);
        });

        // Verify them
        expect(logInfoSpy.mock.calls).toEqual(logInfos);
        expect(logWarnSpy.mock.calls).toEqual(logWarnings);
    });
});
