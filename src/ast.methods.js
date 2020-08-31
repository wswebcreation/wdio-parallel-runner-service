/**
 * Check this is a call to a valid ast callee name
 *
 * @param {object} node
 * @param {string} calleeName
 *
 * @returns {boolean}
 */
function isValidCalleeName(node, calleeName) {
    const calleeNameRegex = new RegExp(`(.?|x|f)${calleeName}`);

    return node.type === 'ExpressionStatement'
        && node.expression.type === 'CallExpression'
        && node.expression.callee.type === 'Identifier'
        && calleeNameRegex.test(node.expression.callee.name.toLowerCase());
}

/**
 * Get all the indexes of the callee name
 *
 * @param {object} array
 * @param {string} calleeName
 *
 * @returns {number[]}
 */
function findCalleeNameIndexes(array, calleeName) {
    return array.reduce(
        (array, node, index) => isValidCalleeName(node, calleeName) ? [...array, index] : array,
        [],
    );
}

export {
    findCalleeNameIndexes,
    isValidCalleeName
}
