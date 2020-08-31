import { findCalleeNameIndexes, isValidCalleeName } from '../src/ast.methods';

describe('AST Methods', () => {
    describe('isValidCalleeName', () => {
        it('should return false for a not valid node type', () => {
            expect(isValidCalleeName(
                { type: 'ImportDeclaration' },
                'describe',
            )).toBeFalsy();
        });

        it('should return false if callee name is not the expected one', () => {
            expect(isValidCalleeName(
                {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'CallExpression',
                        callee: {
                            type: 'Identifier',
                            name: 'foo'
                        }
                    }
                },
                'describe',
            )).toBeFalsy();
        });

        it('should return true for a valid one', () => {
            expect(isValidCalleeName(
                {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'CallExpression',
                        callee: {
                            type: 'Identifier',
                            name: 'describe'
                        }
                    }
                },
                'describe',
            )).toBeTruthy();
        });

        it('should return true for a valid focussed callee name', () => {
            expect(isValidCalleeName(
                {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'CallExpression',
                        callee: {
                            type: 'Identifier',
                            name: 'fdescribe'
                        }
                    }
                },
                'describe',
            )).toBeTruthy();

        });

        it('should return true for a valid disabled callee name', () => {
            expect(isValidCalleeName(
                {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'CallExpression',
                        callee: {
                            type: 'Identifier',
                            name: 'xdescribe'
                        }
                    }
                },
                'describe',
            )).toBeTruthy();
        });

        it('should return true for (describe|test)', () => {
            expect(isValidCalleeName(
                {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'CallExpression',
                        callee: {
                            type: 'Identifier',
                            name: 'test'
                        }
                    }
                },
                '(describe|test)',
            )).toBeTruthy();
        });
    });

    describe('findCalleeNameIndexes', () => {
        it('should return an array of indexes for matching callee names', () => {
            expect(findCalleeNameIndexes(
                [
                    {
                        type: 'ImportDeclaration'
                    },
                    {
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'CallExpression',
                            callee: {
                                type: 'Identifier',
                                name: 'describe'
                            }
                        }
                    },
                    {
                        type: 'ImportDeclaration'
                    },
                    {
                        type: 'ImportDeclaration'
                    },
                    {
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'CallExpression',
                            callee: {
                                type: 'Identifier',
                                name: 'describe'
                            }
                        }
                    }
                ],
                'describe',
            )).toEqual([1, 4]);
        });

        it('should return an empty array of indexes for none matching callee names', () => {
            expect(findCalleeNameIndexes(
                [
                    { type: 'ImportDeclaration' },
                    { type: 'ImportDeclaration' },
                    { type: 'ImportDeclaration' },
                    { type: 'ImportDeclaration' }
                ],
                'describe',
            )).toEqual([]);
        });
    });
});
