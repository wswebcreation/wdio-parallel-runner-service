import cloneDeep from 'lodash.clonedeep';
import { transformFromAstSync } from '@babel/core';
import { ensureFileSync, writeFileSync } from 'fs-extra';

export function createSingleTestFiles(ast, describeIndex, itIndexes, spec) {
    itIndexes.forEach((currentItIndex, index) => {
        const itOfIts = `${++index}-${itIndexes.length}`;
        const newAst = cloneDeep(ast);
        // Get the describe
        const describe = newAst.program.body[describeIndex];
        // First one is always the StringLiteral, second one the (Arrow)FunctionExpression
        const describeArgs = describe.expression.arguments[1].body.body;
        // Change the describe name so the test logs will be more clear
        describe.expression.arguments[0].value = `${describe.expression.arguments[0].value} (${itOfIts})`;
        // Filter out the before/after-All/Each and the matching it so we get
        // one it with the current before/after-All/Each
        describe.expression.arguments[1].body.body = describeArgs.filter(
            (arg, index) => index === currentItIndex || !itIndexes.includes(index)
        );
        const newCode = transformFromAstSync(newAst).code;
        ensureFileSync(`${spec}.${itOfIts}.js`);
        writeFileSync(`${spec}.${itOfIts}.js`, newCode);
    });
}
