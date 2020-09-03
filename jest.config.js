module.exports = {
    testMatch: [
        '<rootDir>/tests/**/*.test.js'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/'
    ],
    collectCoverageFrom: [
        '<rootDir>/src/**/{!(index),}.js'
    ],
    coverageDirectory: './coverage/',
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    testEnvironment: 'node',
    coveragePathIgnorePatterns: [
        'node_modules/'
    ]
};
