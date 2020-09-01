import * as fs from 'fs-extra';
import logger from '@wdio/logger';
import ParallelRunnerLauncher from '../src/launcher';

const log = logger('test-wdio-parallel-runner-service');
let logInfoSpy = jest.spyOn(log, 'info').mockImplementation((string) => string);
let logWarnSpy = jest.spyOn(log, 'warn').mockImplementation((string) => string);

jest.mock('fs-extra');

beforeEach(() => {
    fs.removeSync.mockClear();
    log.info.mockClear();
    log.warn.mockClear();
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

    it('should be able to log the error when the files can not be removedlet', () => {
        const service = new ParallelRunnerLauncher(options, caps, config);
        const logInfos = [];
        const logWarnings = [];
        // Mock the errors
        fs.removeSync.mockImplementation(() => {throw new Error('some error')});

        // Call the method
        service.onComplete(0, config);

        // Store all warnings / info logs
        config.specs.forEach(spec => {
            logInfos.push([`Trying to remove temporary file: '${spec}'.`]);
            logWarnings.push([`Not able to remove temporary file: '${spec}' due to an error.`]);
            logWarnings.push([new Error('some error')]);
        });

        // Verify them
        expect(logInfoSpy.mock.calls).toEqual(logInfos)
        expect(logWarnSpy.mock.calls).toEqual(logWarnings)
    });
});
