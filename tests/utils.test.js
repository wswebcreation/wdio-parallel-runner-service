import * as fs from 'fs-extra';
import * as _ from 'lodash';
import * as babel from '@babel/core';
import { createSingleTestFiles } from '../src/utils';
import {
    ast,
    transformFromAstSyncOne,
    transformFromAstSyncThree,
    transformFromAstSyncTwo
} from './__mocks__/files';

jest.mock('fs-extra');
jest.mock('lodash');
jest.mock('@babel/core');

describe('utils', () => {
    describe('createSingleTestFiles', () => {
        it('should be calling all internal methods', () => {
            const spec = 'path/to/something.js';
            _.cloneDeep.mockReturnValue(ast);
            babel.transformFromAstSync
                .mockReturnValueOnce(transformFromAstSyncOne)
                .mockReturnValueOnce(transformFromAstSyncTwo)
                .mockReturnValueOnce(transformFromAstSyncThree);

            createSingleTestFiles(ast, [3], [1, 2, 3], spec);

            expect(_.cloneDeep).toHaveBeenCalledTimes(3);
            expect(babel.transformFromAstSync).toHaveBeenCalledTimes(3);
            expect(babel.transformFromAstSync).toHaveBeenCalledWith(ast);
            expect(fs.ensureFileSync).toHaveBeenCalledTimes(3);
            expect(fs.ensureFileSync).toHaveBeenCalledWith(`${spec}.1-3.js`);
            expect(fs.ensureFileSync).toHaveBeenCalledWith(`${spec}.2-3.js`);
            expect(fs.ensureFileSync).toHaveBeenCalledWith(`${spec}.3-3.js`);
            expect(fs.writeFileSync).toHaveBeenCalledTimes(3);
            expect(fs.writeFileSync).toHaveBeenCalledWith(`${spec}.1-3.js`, transformFromAstSyncOne.code);
            expect(fs.writeFileSync).toHaveBeenCalledWith(`${spec}.2-3.js`, transformFromAstSyncTwo.code);
            expect(fs.writeFileSync).toHaveBeenCalledWith(`${spec}.3-3.js`, transformFromAstSyncThree.code);
        });
    });
});
