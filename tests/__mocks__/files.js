const ast =  {
    'type': 'File',
    'start': 0,
    'end': 1362,
    'loc': {
        'start': {
            'line': 1,
            'column': 0
        },
        'end': {
            'line': 40,
            'column': 0
        }
    },
    'errors': [],
    'program': {
        'type': 'Program',
        'start': 0,
        'end': 1362,
        'loc': {
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 40,
                'column': 0
            }
        },
        'sourceType': 'module',
        'interpreter': null,
        'body': [
            {
                'type': 'ImportDeclaration',
                'start': 0,
                'end': 54,
                'loc': {
                    'start': {
                        'line': 1,
                        'column': 0
                    },
                    'end': {
                        'line': 1,
                        'column': 54
                    }
                },
                'specifiers': [
                    {
                        'type': 'ImportSpecifier',
                        'start': 9,
                        'end': 20,
                        'loc': {
                            'start': {
                                'line': 1,
                                'column': 9
                            },
                            'end': {
                                'line': 1,
                                'column': 20
                            }
                        },
                        'imported': {
                            'type': 'Identifier',
                            'start': 9,
                            'end': 20,
                            'loc': {
                                'start': {
                                    'line': 1,
                                    'column': 9
                                },
                                'end': {
                                    'line': 1,
                                    'column': 20
                                },
                                'identifierName': 'LOGIN_USERS'
                            },
                            'name': 'LOGIN_USERS'
                        },
                        'local': {
                            'type': 'Identifier',
                            'start': 9,
                            'end': 20,
                            'loc': {
                                'start': {
                                    'line': 1,
                                    'column': 9
                                },
                                'end': {
                                    'line': 1,
                                    'column': 20
                                },
                                'identifierName': 'LOGIN_USERS'
                            },
                            'name': 'LOGIN_USERS'
                        }
                    }
                ],
                'source': {
                    'type': 'StringLiteral',
                    'start': 28,
                    'end': 53,
                    'loc': {
                        'start': {
                            'line': 1,
                            'column': 28
                        },
                        'end': {
                            'line': 1,
                            'column': 53
                        }
                    },
                    'extra': {
                        'rawValue': '../configs/e2eConstants',
                        'raw': "'../configs/e2eConstants'"
                    },
                    'value': '../configs/e2eConstants'
                }
            },
            {
                'type': 'ImportDeclaration',
                'start': 55,
                'end': 105,
                'loc': {
                    'start': {
                        'line': 2,
                        'column': 0
                    },
                    'end': {
                        'line': 2,
                        'column': 50
                    }
                },
                'specifiers': [
                    {
                        'type': 'ImportDefaultSpecifier',
                        'start': 62,
                        'end': 71,
                        'loc': {
                            'start': {
                                'line': 2,
                                'column': 7
                            },
                            'end': {
                                'line': 2,
                                'column': 16
                            }
                        },
                        'local': {
                            'type': 'Identifier',
                            'start': 62,
                            'end': 71,
                            'loc': {
                                'start': {
                                    'line': 2,
                                    'column': 7
                                },
                                'end': {
                                    'line': 2,
                                    'column': 16
                                },
                                'identifierName': 'LoginPage'
                            },
                            'name': 'LoginPage'
                        }
                    }
                ],
                'source': {
                    'type': 'StringLiteral',
                    'start': 77,
                    'end': 104,
                    'loc': {
                        'start': {
                            'line': 2,
                            'column': 22
                        },
                        'end': {
                            'line': 2,
                            'column': 49
                        }
                    },
                    'extra': {
                        'rawValue': '../page-objects/LoginPage',
                        'raw': "'../page-objects/LoginPage'"
                    },
                    'value': '../page-objects/LoginPage'
                }
            },
            {
                'type': 'ImportDeclaration',
                'start': 106,
                'end': 170,
                'loc': {
                    'start': {
                        'line': 3,
                        'column': 0
                    },
                    'end': {
                        'line': 3,
                        'column': 64
                    }
                },
                'specifiers': [
                    {
                        'type': 'ImportDefaultSpecifier',
                        'start': 113,
                        'end': 129,
                        'loc': {
                            'start': {
                                'line': 3,
                                'column': 7
                            },
                            'end': {
                                'line': 3,
                                'column': 23
                            }
                        },
                        'local': {
                            'type': 'Identifier',
                            'start': 113,
                            'end': 129,
                            'loc': {
                                'start': {
                                    'line': 3,
                                    'column': 7
                                },
                                'end': {
                                    'line': 3,
                                    'column': 23
                                },
                                'identifierName': 'SwagOverviewPage'
                            },
                            'name': 'SwagOverviewPage'
                        }
                    }
                ],
                'source': {
                    'type': 'StringLiteral',
                    'start': 135,
                    'end': 169,
                    'loc': {
                        'start': {
                            'line': 3,
                            'column': 29
                        },
                        'end': {
                            'line': 3,
                            'column': 63
                        }
                    },
                    'extra': {
                        'rawValue': '../page-objects/SwagOverviewPage',
                        'raw': "'../page-objects/SwagOverviewPage'"
                    },
                    'value': '../page-objects/SwagOverviewPage'
                }
            },
            {
                'type': 'ExpressionStatement',
                'start': 172,
                'end': 1361,
                'loc': {
                    'start': {
                        'line': 5,
                        'column': 0
                    },
                    'end': {
                        'line': 39,
                        'column': 3
                    }
                },
                'expression': {
                    'type': 'CallExpression',
                    'start': 172,
                    'end': 1360,
                    'loc': {
                        'start': {
                            'line': 5,
                            'column': 0
                        },
                        'end': {
                            'line': 39,
                            'column': 2
                        }
                    },
                    'callee': {
                        'type': 'Identifier',
                        'start': 172,
                        'end': 180,
                        'loc': {
                            'start': {
                                'line': 5,
                                'column': 0
                            },
                            'end': {
                                'line': 5,
                                'column': 8
                            },
                            'identifierName': 'describe'
                        },
                        'name': 'describe'
                    },
                    'arguments': [
                        {
                            'type': 'StringLiteral',
                            'start': 181,
                            'end': 192,
                            'loc': {
                                'start': {
                                    'line': 5,
                                    'column': 9
                                },
                                'end': {
                                    'line': 5,
                                    'column': 20
                                }
                            },
                            'extra': {
                                'rawValue': 'LoginPage',
                                'raw': "'LoginPage'"
                            },
                            'value': 'LoginPage'
                        },
                        {
                            'type': 'ArrowFunctionExpression',
                            'start': 194,
                            'end': 1359,
                            'loc': {
                                'start': {
                                    'line': 5,
                                    'column': 22
                                },
                                'end': {
                                    'line': 39,
                                    'column': 1
                                }
                            },
                            'id': null,
                            'generator': false,
                            'async': false,
                            'params': [],
                            'body': {
                                'type': 'BlockStatement',
                                'start': 200,
                                'end': 1359,
                                'loc': {
                                    'start': {
                                        'line': 5,
                                        'column': 28
                                    },
                                    'end': {
                                        'line': 39,
                                        'column': 1
                                    }
                                },
                                'body': [
                                    {
                                        'type': 'ExpressionStatement',
                                        'start': 206,
                                        'end': 293,
                                        'loc': {
                                            'start': {
                                                'line': 6,
                                                'column': 4
                                            },
                                            'end': {
                                                'line': 9,
                                                'column': 7
                                            }
                                        },
                                        'expression': {
                                            'type': 'CallExpression',
                                            'start': 206,
                                            'end': 292,
                                            'loc': {
                                                'start': {
                                                    'line': 6,
                                                    'column': 4
                                                },
                                                'end': {
                                                    'line': 9,
                                                    'column': 6
                                                }
                                            },
                                            'callee': {
                                                'type': 'Identifier',
                                                'start': 206,
                                                'end': 216,
                                                'loc': {
                                                    'start': {
                                                        'line': 6,
                                                        'column': 4
                                                    },
                                                    'end': {
                                                        'line': 6,
                                                        'column': 14
                                                    },
                                                    'identifierName': 'beforeEach'
                                                },
                                                'name': 'beforeEach'
                                            },
                                            'arguments': [
                                                {
                                                    'type': 'ArrowFunctionExpression',
                                                    'start': 217,
                                                    'end': 291,
                                                    'loc': {
                                                        'start': {
                                                            'line': 6,
                                                            'column': 15
                                                        },
                                                        'end': {
                                                            'line': 9,
                                                            'column': 5
                                                        }
                                                    },
                                                    'id': null,
                                                    'generator': false,
                                                    'async': false,
                                                    'params': [],
                                                    'body': {
                                                        'type': 'BlockStatement',
                                                        'start': 223,
                                                        'end': 291,
                                                        'loc': {
                                                            'start': {
                                                                'line': 6,
                                                                'column': 21
                                                            },
                                                            'end': {
                                                                'line': 9,
                                                                'column': 5
                                                            }
                                                        },
                                                        'body': [
                                                            {
                                                                'type': 'ExpressionStatement',
                                                                'start': 233,
                                                                'end': 249,
                                                                'loc': {
                                                                    'start': {
                                                                        'line': 7,
                                                                        'column': 8
                                                                    },
                                                                    'end': {
                                                                        'line': 7,
                                                                        'column': 24
                                                                    }
                                                                },
                                                                'expression': {
                                                                    'type': 'CallExpression',
                                                                    'start': 233,
                                                                    'end': 248,
                                                                    'loc': {
                                                                        'start': {
                                                                            'line': 7,
                                                                            'column': 8
                                                                        },
                                                                        'end': {
                                                                            'line': 7,
                                                                            'column': 23
                                                                        }
                                                                    },
                                                                    'callee': {
                                                                        'type': 'MemberExpression',
                                                                        'start': 233,
                                                                        'end': 244,
                                                                        'loc': {
                                                                            'start': {
                                                                                'line': 7,
                                                                                'column': 8
                                                                            },
                                                                            'end': {
                                                                                'line': 7,
                                                                                'column': 19
                                                                            }
                                                                        },
                                                                        'object': {
                                                                            'type': 'Identifier',
                                                                            'start': 233,
                                                                            'end': 240,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 7,
                                                                                    'column': 8
                                                                                },
                                                                                'end': {
                                                                                    'line': 7,
                                                                                    'column': 15
                                                                                },
                                                                                'identifierName': 'browser'
                                                                            },
                                                                            'name': 'browser'
                                                                        },
                                                                        'computed': false,
                                                                        'property': {
                                                                            'type': 'Identifier',
                                                                            'start': 241,
                                                                            'end': 244,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 7,
                                                                                    'column': 16
                                                                                },
                                                                                'end': {
                                                                                    'line': 7,
                                                                                    'column': 19
                                                                                },
                                                                                'identifierName': 'url'
                                                                            },
                                                                            'name': 'url'
                                                                        }
                                                                    },
                                                                    'arguments': [
                                                                        {
                                                                            'type': 'StringLiteral',
                                                                            'start': 245,
                                                                            'end': 247,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 7,
                                                                                    'column': 20
                                                                                },
                                                                                'end': {
                                                                                    'line': 7,
                                                                                    'column': 22
                                                                                }
                                                                            },
                                                                            'extra': {
                                                                                'rawValue': '',
                                                                                'raw': "''"
                                                                            },
                                                                            'value': ''
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                'type': 'ExpressionStatement',
                                                                'start': 258,
                                                                'end': 285,
                                                                'loc': {
                                                                    'start': {
                                                                        'line': 8,
                                                                        'column': 8
                                                                    },
                                                                    'end': {
                                                                        'line': 8,
                                                                        'column': 35
                                                                    }
                                                                },
                                                                'expression': {
                                                                    'type': 'CallExpression',
                                                                    'start': 258,
                                                                    'end': 284,
                                                                    'loc': {
                                                                        'start': {
                                                                            'line': 8,
                                                                            'column': 8
                                                                        },
                                                                        'end': {
                                                                            'line': 8,
                                                                            'column': 34
                                                                        }
                                                                    },
                                                                    'callee': {
                                                                        'type': 'MemberExpression',
                                                                        'start': 258,
                                                                        'end': 282,
                                                                        'loc': {
                                                                            'start': {
                                                                                'line': 8,
                                                                                'column': 8
                                                                            },
                                                                            'end': {
                                                                                'line': 8,
                                                                                'column': 32
                                                                            }
                                                                        },
                                                                        'object': {
                                                                            'type': 'Identifier',
                                                                            'start': 258,
                                                                            'end': 267,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 8,
                                                                                    'column': 8
                                                                                },
                                                                                'end': {
                                                                                    'line': 8,
                                                                                    'column': 17
                                                                                },
                                                                                'identifierName': 'LoginPage'
                                                                            },
                                                                            'name': 'LoginPage'
                                                                        },
                                                                        'computed': false,
                                                                        'property': {
                                                                            'type': 'Identifier',
                                                                            'start': 268,
                                                                            'end': 282,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 8,
                                                                                    'column': 18
                                                                                },
                                                                                'end': {
                                                                                    'line': 8,
                                                                                    'column': 32
                                                                                },
                                                                                'identifierName': 'waitForIsShown'
                                                                            },
                                                                            'name': 'waitForIsShown'
                                                                        }
                                                                    },
                                                                    'arguments': []
                                                                }
                                                            }
                                                        ],
                                                        'directives': []
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        'type': 'ExpressionStatement',
                                        'start': 299,
                                        'end': 490,
                                        'loc': {
                                            'start': {
                                                'line': 11,
                                                'column': 4
                                            },
                                            'end': {
                                                'line': 16,
                                                'column': 7
                                            }
                                        },
                                        'expression': {
                                            'type': 'CallExpression',
                                            'start': 299,
                                            'end': 489,
                                            'loc': {
                                                'start': {
                                                    'line': 11,
                                                    'column': 4
                                                },
                                                'end': {
                                                    'line': 16,
                                                    'column': 6
                                                }
                                            },
                                            'callee': {
                                                'type': 'Identifier',
                                                'start': 299,
                                                'end': 301,
                                                'loc': {
                                                    'start': {
                                                        'line': 11,
                                                        'column': 4
                                                    },
                                                    'end': {
                                                        'line': 11,
                                                        'column': 6
                                                    },
                                                    'identifierName': 'it'
                                                },
                                                'name': 'it'
                                            },
                                            'arguments': [
                                                {
                                                    'type': 'StringLiteral',
                                                    'start': 302,
                                                    'end': 348,
                                                    'loc': {
                                                        'start': {
                                                            'line': 11,
                                                            'column': 7
                                                        },
                                                        'end': {
                                                            'line': 11,
                                                            'column': 53
                                                        }
                                                    },
                                                    'extra': {
                                                        'rawValue': 'should be able to test loading of login page',
                                                        'raw': "'should be able to test loading of login page'"
                                                    },
                                                    'value': 'should be able to test loading of login page'
                                                },
                                                {
                                                    'type': 'ArrowFunctionExpression',
                                                    'start': 350,
                                                    'end': 488,
                                                    'loc': {
                                                        'start': {
                                                            'line': 11,
                                                            'column': 55
                                                        },
                                                        'end': {
                                                            'line': 16,
                                                            'column': 5
                                                        }
                                                    },
                                                    'id': null,
                                                    'generator': false,
                                                    'async': false,
                                                    'params': [],
                                                    'body': {
                                                        'type': 'BlockStatement',
                                                        'start': 356,
                                                        'end': 488,
                                                        'loc': {
                                                            'start': {
                                                                'line': 11,
                                                                'column': 61
                                                            },
                                                            'end': {
                                                                'line': 16,
                                                                'column': 5
                                                            }
                                                        },
                                                        'body': [
                                                            {
                                                                'type': 'ExpressionStatement',
                                                                'start': 366,
                                                                'end': 482,
                                                                'loc': {
                                                                    'start': {
                                                                        'line': 12,
                                                                        'column': 8
                                                                    },
                                                                    'end': {
                                                                        'line': 15,
                                                                        'column': 10
                                                                    }
                                                                },
                                                                'expression': {
                                                                    'type': 'CallExpression',
                                                                    'start': 366,
                                                                    'end': 481,
                                                                    'loc': {
                                                                        'start': {
                                                                            'line': 12,
                                                                            'column': 8
                                                                        },
                                                                        'end': {
                                                                            'line': 15,
                                                                            'column': 9
                                                                        }
                                                                    },
                                                                    'callee': {
                                                                        'type': 'MemberExpression',
                                                                        'start': 366,
                                                                        'end': 408,
                                                                        'loc': {
                                                                            'start': {
                                                                                'line': 12,
                                                                                'column': 8
                                                                            },
                                                                            'end': {
                                                                                'line': 12,
                                                                                'column': 50
                                                                            }
                                                                        },
                                                                        'object': {
                                                                            'type': 'CallExpression',
                                                                            'start': 366,
                                                                            'end': 400,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 12,
                                                                                    'column': 8
                                                                                },
                                                                                'end': {
                                                                                    'line': 12,
                                                                                    'column': 42
                                                                                }
                                                                            },
                                                                            'callee': {
                                                                                'type': 'Identifier',
                                                                                'start': 366,
                                                                                'end': 372,
                                                                                'loc': {
                                                                                    'start': {
                                                                                        'line': 12,
                                                                                        'column': 8
                                                                                    },
                                                                                    'end': {
                                                                                        'line': 12,
                                                                                        'column': 14
                                                                                    },
                                                                                    'identifierName': 'expect'
                                                                                },
                                                                                'name': 'expect'
                                                                            },
                                                                            'arguments': [
                                                                                {
                                                                                    'type': 'CallExpression',
                                                                                    'start': 373,
                                                                                    'end': 399,
                                                                                    'loc': {
                                                                                        'start': {
                                                                                            'line': 12,
                                                                                            'column': 15
                                                                                        },
                                                                                        'end': {
                                                                                            'line': 12,
                                                                                            'column': 41
                                                                                        }
                                                                                    },
                                                                                    'callee': {
                                                                                        'type': 'MemberExpression',
                                                                                        'start': 373,
                                                                                        'end': 397,
                                                                                        'loc': {
                                                                                            'start': {
                                                                                                'line': 12,
                                                                                                'column': 15
                                                                                            },
                                                                                            'end': {
                                                                                                'line': 12,
                                                                                                'column': 39
                                                                                            }
                                                                                        },
                                                                                        'object': {
                                                                                            'type': 'Identifier',
                                                                                            'start': 373,
                                                                                            'end': 382,
                                                                                            'loc': {
                                                                                                'start': {
                                                                                                    'line': 12,
                                                                                                    'column': 15
                                                                                                },
                                                                                                'end': {
                                                                                                    'line': 12,
                                                                                                    'column': 24
                                                                                                },
                                                                                                'identifierName': 'LoginPage'
                                                                                            },
                                                                                            'name': 'LoginPage'
                                                                                        },
                                                                                        'computed': false,
                                                                                        'property': {
                                                                                            'type': 'Identifier',
                                                                                            'start': 383,
                                                                                            'end': 397,
                                                                                            'loc': {
                                                                                                'start': {
                                                                                                    'line': 12,
                                                                                                    'column': 25
                                                                                                },
                                                                                                'end': {
                                                                                                    'line': 12,
                                                                                                    'column': 39
                                                                                                },
                                                                                                'identifierName': 'waitForIsShown'
                                                                                            },
                                                                                            'name': 'waitForIsShown'
                                                                                        }
                                                                                    },
                                                                                    'arguments': []
                                                                                }
                                                                            ]
                                                                        },
                                                                        'computed': false,
                                                                        'property': {
                                                                            'type': 'Identifier',
                                                                            'start': 401,
                                                                            'end': 408,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 12,
                                                                                    'column': 43
                                                                                },
                                                                                'end': {
                                                                                    'line': 12,
                                                                                    'column': 50
                                                                                },
                                                                                'identifierName': 'toEqual'
                                                                            },
                                                                            'name': 'toEqual'
                                                                        }
                                                                    },
                                                                    'extra': {
                                                                        'trailingComma': 470
                                                                    },
                                                                    'arguments': [
                                                                        {
                                                                            'type': 'BooleanLiteral',
                                                                            'start': 422,
                                                                            'end': 426,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 13,
                                                                                    'column': 12
                                                                                },
                                                                                'end': {
                                                                                    'line': 13,
                                                                                    'column': 16
                                                                                }
                                                                            },
                                                                            'value': true
                                                                        },
                                                                        {
                                                                            'type': 'StringLiteral',
                                                                            'start': 440,
                                                                            'end': 470,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 14,
                                                                                    'column': 12
                                                                                },
                                                                                'end': {
                                                                                    'line': 14,
                                                                                    'column': 42
                                                                                }
                                                                            },
                                                                            'extra': {
                                                                                'rawValue': 'LoginPage page was not shown',
                                                                                'raw': "'LoginPage page was not shown'"
                                                                            },
                                                                            'value': 'LoginPage page was not shown'
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ],
                                                        'directives': []
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        'type': 'ExpressionStatement',
                                        'start': 496,
                                        'end': 804,
                                        'loc': {
                                            'start': {
                                                'line': 18,
                                                'column': 4
                                            },
                                            'end': {
                                                'line': 26,
                                                'column': 7
                                            }
                                        },
                                        'expression': {
                                            'type': 'CallExpression',
                                            'start': 496,
                                            'end': 803,
                                            'loc': {
                                                'start': {
                                                    'line': 18,
                                                    'column': 4
                                                },
                                                'end': {
                                                    'line': 26,
                                                    'column': 6
                                                }
                                            },
                                            'callee': {
                                                'type': 'Identifier',
                                                'start': 496,
                                                'end': 498,
                                                'loc': {
                                                    'start': {
                                                        'line': 18,
                                                        'column': 4
                                                    },
                                                    'end': {
                                                        'line': 18,
                                                        'column': 6
                                                    },
                                                    'identifierName': 'it'
                                                },
                                                'name': 'it'
                                            },
                                            'arguments': [
                                                {
                                                    'type': 'StringLiteral',
                                                    'start': 499,
                                                    'end': 545,
                                                    'loc': {
                                                        'start': {
                                                            'line': 18,
                                                            'column': 7
                                                        },
                                                        'end': {
                                                            'line': 18,
                                                            'column': 53
                                                        }
                                                    },
                                                    'extra': {
                                                        'rawValue': 'should be able to login with a standard user',
                                                        'raw': "'should be able to login with a standard user'"
                                                    },
                                                    'value': 'should be able to login with a standard user'
                                                },
                                                {
                                                    'type': 'ArrowFunctionExpression',
                                                    'start': 547,
                                                    'end': 802,
                                                    'loc': {
                                                        'start': {
                                                            'line': 18,
                                                            'column': 55
                                                        },
                                                        'end': {
                                                            'line': 26,
                                                            'column': 5
                                                        }
                                                    },
                                                    'id': null,
                                                    'generator': false,
                                                    'async': false,
                                                    'params': [],
                                                    'body': {
                                                        'type': 'BlockStatement',
                                                        'start': 553,
                                                        'end': 802,
                                                        'loc': {
                                                            'start': {
                                                                'line': 18,
                                                                'column': 61
                                                            },
                                                            'end': {
                                                                'line': 26,
                                                                'column': 5
                                                            }
                                                        },
                                                        'body': [
                                                            {
                                                                'type': 'ExpressionStatement',
                                                                'start': 563,
                                                                'end': 602,
                                                                'loc': {
                                                                    'start': {
                                                                        'line': 19,
                                                                        'column': 8
                                                                    },
                                                                    'end': {
                                                                        'line': 19,
                                                                        'column': 47
                                                                    }
                                                                },
                                                                'expression': {
                                                                    'type': 'CallExpression',
                                                                    'start': 563,
                                                                    'end': 601,
                                                                    'loc': {
                                                                        'start': {
                                                                            'line': 19,
                                                                            'column': 8
                                                                        },
                                                                        'end': {
                                                                            'line': 19,
                                                                            'column': 46
                                                                        }
                                                                    },
                                                                    'callee': {
                                                                        'type': 'MemberExpression',
                                                                        'start': 563,
                                                                        'end': 579,
                                                                        'loc': {
                                                                            'start': {
                                                                                'line': 19,
                                                                                'column': 8
                                                                            },
                                                                            'end': {
                                                                                'line': 19,
                                                                                'column': 24
                                                                            }
                                                                        },
                                                                        'object': {
                                                                            'type': 'Identifier',
                                                                            'start': 563,
                                                                            'end': 572,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 19,
                                                                                    'column': 8
                                                                                },
                                                                                'end': {
                                                                                    'line': 19,
                                                                                    'column': 17
                                                                                },
                                                                                'identifierName': 'LoginPage'
                                                                            },
                                                                            'name': 'LoginPage'
                                                                        },
                                                                        'computed': false,
                                                                        'property': {
                                                                            'type': 'Identifier',
                                                                            'start': 573,
                                                                            'end': 579,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 19,
                                                                                    'column': 18
                                                                                },
                                                                                'end': {
                                                                                    'line': 19,
                                                                                    'column': 24
                                                                                },
                                                                                'identifierName': 'signIn'
                                                                            },
                                                                            'name': 'signIn'
                                                                        }
                                                                    },
                                                                    'arguments': [
                                                                        {
                                                                            'type': 'MemberExpression',
                                                                            'start': 580,
                                                                            'end': 600,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 19,
                                                                                    'column': 25
                                                                                },
                                                                                'end': {
                                                                                    'line': 19,
                                                                                    'column': 45
                                                                                }
                                                                            },
                                                                            'object': {
                                                                                'type': 'Identifier',
                                                                                'start': 580,
                                                                                'end': 591,
                                                                                'loc': {
                                                                                    'start': {
                                                                                        'line': 19,
                                                                                        'column': 25
                                                                                    },
                                                                                    'end': {
                                                                                        'line': 19,
                                                                                        'column': 36
                                                                                    },
                                                                                    'identifierName': 'LOGIN_USERS'
                                                                                },
                                                                                'name': 'LOGIN_USERS'
                                                                            },
                                                                            'computed': false,
                                                                            'property': {
                                                                                'type': 'Identifier',
                                                                                'start': 592,
                                                                                'end': 600,
                                                                                'loc': {
                                                                                    'start': {
                                                                                        'line': 19,
                                                                                        'column': 37
                                                                                    },
                                                                                    'end': {
                                                                                        'line': 19,
                                                                                        'column': 45
                                                                                    },
                                                                                    'identifierName': 'STANDARD'
                                                                                },
                                                                                'name': 'STANDARD'
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                'trailingComments': [
                                                                    {
                                                                        'type': 'CommentLine',
                                                                        'value': ' Wait for the inventory screen and check it',
                                                                        'start': 612,
                                                                        'end': 657,
                                                                        'loc': {
                                                                            'start': {
                                                                                'line': 21,
                                                                                'column': 8
                                                                            },
                                                                            'end': {
                                                                                'line': 21,
                                                                                'column': 53
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                'type': 'ExpressionStatement',
                                                                'start': 666,
                                                                'end': 796,
                                                                'loc': {
                                                                    'start': {
                                                                        'line': 22,
                                                                        'column': 8
                                                                    },
                                                                    'end': {
                                                                        'line': 25,
                                                                        'column': 10
                                                                    }
                                                                },
                                                                'expression': {
                                                                    'type': 'CallExpression',
                                                                    'start': 666,
                                                                    'end': 795,
                                                                    'loc': {
                                                                        'start': {
                                                                            'line': 22,
                                                                            'column': 8
                                                                        },
                                                                        'end': {
                                                                            'line': 25,
                                                                            'column': 9
                                                                        }
                                                                    },
                                                                    'callee': {
                                                                        'type': 'MemberExpression',
                                                                        'start': 666,
                                                                        'end': 715,
                                                                        'loc': {
                                                                            'start': {
                                                                                'line': 22,
                                                                                'column': 8
                                                                            },
                                                                            'end': {
                                                                                'line': 22,
                                                                                'column': 57
                                                                            }
                                                                        },
                                                                        'object': {
                                                                            'type': 'CallExpression',
                                                                            'start': 666,
                                                                            'end': 707,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 22,
                                                                                    'column': 8
                                                                                },
                                                                                'end': {
                                                                                    'line': 22,
                                                                                    'column': 49
                                                                                }
                                                                            },
                                                                            'callee': {
                                                                                'type': 'Identifier',
                                                                                'start': 666,
                                                                                'end': 672,
                                                                                'loc': {
                                                                                    'start': {
                                                                                        'line': 22,
                                                                                        'column': 8
                                                                                    },
                                                                                    'end': {
                                                                                        'line': 22,
                                                                                        'column': 14
                                                                                    },
                                                                                    'identifierName': 'expect'
                                                                                },
                                                                                'name': 'expect'
                                                                            },
                                                                            'arguments': [
                                                                                {
                                                                                    'type': 'CallExpression',
                                                                                    'start': 673,
                                                                                    'end': 706,
                                                                                    'loc': {
                                                                                        'start': {
                                                                                            'line': 22,
                                                                                            'column': 15
                                                                                        },
                                                                                        'end': {
                                                                                            'line': 22,
                                                                                            'column': 48
                                                                                        }
                                                                                    },
                                                                                    'callee': {
                                                                                        'type': 'MemberExpression',
                                                                                        'start': 673,
                                                                                        'end': 704,
                                                                                        'loc': {
                                                                                            'start': {
                                                                                                'line': 22,
                                                                                                'column': 15
                                                                                            },
                                                                                            'end': {
                                                                                                'line': 22,
                                                                                                'column': 46
                                                                                            }
                                                                                        },
                                                                                        'object': {
                                                                                            'type': 'Identifier',
                                                                                            'start': 673,
                                                                                            'end': 689,
                                                                                            'loc': {
                                                                                                'start': {
                                                                                                    'line': 22,
                                                                                                    'column': 15
                                                                                                },
                                                                                                'end': {
                                                                                                    'line': 22,
                                                                                                    'column': 31
                                                                                                },
                                                                                                'identifierName': 'SwagOverviewPage'
                                                                                            },
                                                                                            'name': 'SwagOverviewPage'
                                                                                        },
                                                                                        'computed': false,
                                                                                        'property': {
                                                                                            'type': 'Identifier',
                                                                                            'start': 690,
                                                                                            'end': 704,
                                                                                            'loc': {
                                                                                                'start': {
                                                                                                    'line': 22,
                                                                                                    'column': 32
                                                                                                },
                                                                                                'end': {
                                                                                                    'line': 22,
                                                                                                    'column': 46
                                                                                                },
                                                                                                'identifierName': 'waitForIsShown'
                                                                                            },
                                                                                            'name': 'waitForIsShown'
                                                                                        }
                                                                                    },
                                                                                    'arguments': []
                                                                                }
                                                                            ]
                                                                        },
                                                                        'computed': false,
                                                                        'property': {
                                                                            'type': 'Identifier',
                                                                            'start': 708,
                                                                            'end': 715,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 22,
                                                                                    'column': 50
                                                                                },
                                                                                'end': {
                                                                                    'line': 22,
                                                                                    'column': 57
                                                                                },
                                                                                'identifierName': 'toEqual'
                                                                            },
                                                                            'name': 'toEqual'
                                                                        }
                                                                    },
                                                                    'extra': {
                                                                        'trailingComma': 784
                                                                    },
                                                                    'arguments': [
                                                                        {
                                                                            'type': 'BooleanLiteral',
                                                                            'start': 729,
                                                                            'end': 733,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 23,
                                                                                    'column': 12
                                                                                },
                                                                                'end': {
                                                                                    'line': 23,
                                                                                    'column': 16
                                                                                }
                                                                            },
                                                                            'value': true
                                                                        },
                                                                        {
                                                                            'type': 'StringLiteral',
                                                                            'start': 747,
                                                                            'end': 784,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 24,
                                                                                    'column': 12
                                                                                },
                                                                                'end': {
                                                                                    'line': 24,
                                                                                    'column': 49
                                                                                }
                                                                            },
                                                                            'extra': {
                                                                                'rawValue': 'Inventory List screen was not shown',
                                                                                'raw': "'Inventory List screen was not shown'"
                                                                            },
                                                                            'value': 'Inventory List screen was not shown'
                                                                        }
                                                                    ]
                                                                },
                                                                'leadingComments': [
                                                                    {
                                                                        'type': 'CommentLine',
                                                                        'value': ' Wait for the inventory screen and check it',
                                                                        'start': 612,
                                                                        'end': 657,
                                                                        'loc': {
                                                                            'start': {
                                                                                'line': 21,
                                                                                'column': 8
                                                                            },
                                                                            'end': {
                                                                                'line': 21,
                                                                                'column': 53
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ],
                                                        'directives': []
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        'type': 'ExpressionStatement',
                                        'start': 810,
                                        'end': 1357,
                                        'loc': {
                                            'start': {
                                                'line': 28,
                                                'column': 4
                                            },
                                            'end': {
                                                'line': 38,
                                                'column': 7
                                            }
                                        },
                                        'expression': {
                                            'type': 'CallExpression',
                                            'start': 810,
                                            'end': 1356,
                                            'loc': {
                                                'start': {
                                                    'line': 28,
                                                    'column': 4
                                                },
                                                'end': {
                                                    'line': 38,
                                                    'column': 6
                                                }
                                            },
                                            'callee': {
                                                'type': 'Identifier',
                                                'start': 810,
                                                'end': 812,
                                                'loc': {
                                                    'start': {
                                                        'line': 28,
                                                        'column': 4
                                                    },
                                                    'end': {
                                                        'line': 28,
                                                        'column': 6
                                                    },
                                                    'identifierName': 'it'
                                                },
                                                'name': 'it'
                                            },
                                            'arguments': [
                                                {
                                                    'type': 'StringLiteral',
                                                    'start': 813,
                                                    'end': 861,
                                                    'loc': {
                                                        'start': {
                                                            'line': 28,
                                                            'column': 7
                                                        },
                                                        'end': {
                                                            'line': 28,
                                                            'column': 55
                                                        }
                                                    },
                                                    'extra': {
                                                        'rawValue': 'should not be able to login with a locked user',
                                                        'raw': "'should not be able to login with a locked user'"
                                                    },
                                                    'value': 'should not be able to login with a locked user'
                                                },
                                                {
                                                    'type': 'ArrowFunctionExpression',
                                                    'start': 863,
                                                    'end': 1355,
                                                    'loc': {
                                                        'start': {
                                                            'line': 28,
                                                            'column': 57
                                                        },
                                                        'end': {
                                                            'line': 38,
                                                            'column': 5
                                                        }
                                                    },
                                                    'id': null,
                                                    'generator': false,
                                                    'async': false,
                                                    'params': [],
                                                    'body': {
                                                        'type': 'BlockStatement',
                                                        'start': 869,
                                                        'end': 1355,
                                                        'loc': {
                                                            'start': {
                                                                'line': 28,
                                                                'column': 63
                                                            },
                                                            'end': {
                                                                'line': 38,
                                                                'column': 5
                                                            }
                                                        },
                                                        'body': [
                                                            {
                                                                'type': 'ExpressionStatement',
                                                                'start': 1033,
                                                                'end': 1070,
                                                                'loc': {
                                                                    'start': {
                                                                        'line': 31,
                                                                        'column': 8
                                                                    },
                                                                    'end': {
                                                                        'line': 31,
                                                                        'column': 45
                                                                    }
                                                                },
                                                                'expression': {
                                                                    'type': 'CallExpression',
                                                                    'start': 1033,
                                                                    'end': 1069,
                                                                    'loc': {
                                                                        'start': {
                                                                            'line': 31,
                                                                            'column': 8
                                                                        },
                                                                        'end': {
                                                                            'line': 31,
                                                                            'column': 44
                                                                        }
                                                                    },
                                                                    'callee': {
                                                                        'type': 'MemberExpression',
                                                                        'start': 1033,
                                                                        'end': 1049,
                                                                        'loc': {
                                                                            'start': {
                                                                                'line': 31,
                                                                                'column': 8
                                                                            },
                                                                            'end': {
                                                                                'line': 31,
                                                                                'column': 24
                                                                            }
                                                                        },
                                                                        'object': {
                                                                            'type': 'Identifier',
                                                                            'start': 1033,
                                                                            'end': 1042,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 31,
                                                                                    'column': 8
                                                                                },
                                                                                'end': {
                                                                                    'line': 31,
                                                                                    'column': 17
                                                                                },
                                                                                'identifierName': 'LoginPage'
                                                                            },
                                                                            'name': 'LoginPage'
                                                                        },
                                                                        'computed': false,
                                                                        'property': {
                                                                            'type': 'Identifier',
                                                                            'start': 1043,
                                                                            'end': 1049,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 31,
                                                                                    'column': 18
                                                                                },
                                                                                'end': {
                                                                                    'line': 31,
                                                                                    'column': 24
                                                                                },
                                                                                'identifierName': 'signIn'
                                                                            },
                                                                            'name': 'signIn'
                                                                        }
                                                                    },
                                                                    'arguments': [
                                                                        {
                                                                            'type': 'MemberExpression',
                                                                            'start': 1050,
                                                                            'end': 1068,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 31,
                                                                                    'column': 25
                                                                                },
                                                                                'end': {
                                                                                    'line': 31,
                                                                                    'column': 43
                                                                                }
                                                                            },
                                                                            'object': {
                                                                                'type': 'Identifier',
                                                                                'start': 1050,
                                                                                'end': 1061,
                                                                                'loc': {
                                                                                    'start': {
                                                                                        'line': 31,
                                                                                        'column': 25
                                                                                    },
                                                                                    'end': {
                                                                                        'line': 31,
                                                                                        'column': 36
                                                                                    },
                                                                                    'identifierName': 'LOGIN_USERS'
                                                                                },
                                                                                'name': 'LOGIN_USERS'
                                                                            },
                                                                            'computed': false,
                                                                            'property': {
                                                                                'type': 'Identifier',
                                                                                'start': 1062,
                                                                                'end': 1068,
                                                                                'loc': {
                                                                                    'start': {
                                                                                        'line': 31,
                                                                                        'column': 37
                                                                                    },
                                                                                    'end': {
                                                                                        'line': 31,
                                                                                        'column': 43
                                                                                    },
                                                                                    'identifierName': 'LOCKED'
                                                                                },
                                                                                'name': 'LOCKED'
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                'leadingComments': [
                                                                    {
                                                                        'type': 'CommentLine',
                                                                        'value': " It doesn't matter which error we check, all errors should be checked in a UT",
                                                                        'start': 879,
                                                                        'end': 958,
                                                                        'loc': {
                                                                            'start': {
                                                                                'line': 29,
                                                                                'column': 8
                                                                            },
                                                                            'end': {
                                                                                'line': 29,
                                                                                'column': 87
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        'type': 'CommentLine',
                                                                        'value': ' With this UT we just check that A failure is triggered',
                                                                        'start': 967,
                                                                        'end': 1024,
                                                                        'loc': {
                                                                            'start': {
                                                                                'line': 30,
                                                                                'column': 8
                                                                            },
                                                                            'end': {
                                                                                'line': 30,
                                                                                'column': 65
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                'type': 'ExpressionStatement',
                                                                'start': 1080,
                                                                'end': 1164,
                                                                'loc': {
                                                                    'start': {
                                                                        'line': 33,
                                                                        'column': 8
                                                                    },
                                                                    'end': {
                                                                        'line': 33,
                                                                        'column': 92
                                                                    }
                                                                },
                                                                'expression': {
                                                                    'type': 'CallExpression',
                                                                    'start': 1080,
                                                                    'end': 1163,
                                                                    'loc': {
                                                                        'start': {
                                                                            'line': 33,
                                                                            'column': 8
                                                                        },
                                                                        'end': {
                                                                            'line': 33,
                                                                            'column': 91
                                                                        }
                                                                    },
                                                                    'callee': {
                                                                        'type': 'MemberExpression',
                                                                        'start': 1080,
                                                                        'end': 1131,
                                                                        'loc': {
                                                                            'start': {
                                                                                'line': 33,
                                                                                'column': 8
                                                                            },
                                                                            'end': {
                                                                                'line': 33,
                                                                                'column': 59
                                                                            }
                                                                        },
                                                                        'object': {
                                                                            'type': 'CallExpression',
                                                                            'start': 1080,
                                                                            'end': 1123,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 33,
                                                                                    'column': 8
                                                                                },
                                                                                'end': {
                                                                                    'line': 33,
                                                                                    'column': 51
                                                                                }
                                                                            },
                                                                            'callee': {
                                                                                'type': 'Identifier',
                                                                                'start': 1080,
                                                                                'end': 1086,
                                                                                'loc': {
                                                                                    'start': {
                                                                                        'line': 33,
                                                                                        'column': 8
                                                                                    },
                                                                                    'end': {
                                                                                        'line': 33,
                                                                                        'column': 14
                                                                                    },
                                                                                    'identifierName': 'expect'
                                                                                },
                                                                                'name': 'expect'
                                                                            },
                                                                            'arguments': [
                                                                                {
                                                                                    'type': 'CallExpression',
                                                                                    'start': 1087,
                                                                                    'end': 1122,
                                                                                    'loc': {
                                                                                        'start': {
                                                                                            'line': 33,
                                                                                            'column': 15
                                                                                        },
                                                                                        'end': {
                                                                                            'line': 33,
                                                                                            'column': 50
                                                                                        }
                                                                                    },
                                                                                    'callee': {
                                                                                        'type': 'MemberExpression',
                                                                                        'start': 1087,
                                                                                        'end': 1120,
                                                                                        'loc': {
                                                                                            'start': {
                                                                                                'line': 33,
                                                                                                'column': 15
                                                                                            },
                                                                                            'end': {
                                                                                                'line': 33,
                                                                                                'column': 48
                                                                                            }
                                                                                        },
                                                                                        'object': {
                                                                                            'type': 'Identifier',
                                                                                            'start': 1087,
                                                                                            'end': 1096,
                                                                                            'loc': {
                                                                                                'start': {
                                                                                                    'line': 33,
                                                                                                    'column': 15
                                                                                                },
                                                                                                'end': {
                                                                                                    'line': 33,
                                                                                                    'column': 24
                                                                                                },
                                                                                                'identifierName': 'LoginPage'
                                                                                            },
                                                                                            'name': 'LoginPage'
                                                                                        },
                                                                                        'computed': false,
                                                                                        'property': {
                                                                                            'type': 'Identifier',
                                                                                            'start': 1097,
                                                                                            'end': 1120,
                                                                                            'loc': {
                                                                                                'start': {
                                                                                                    'line': 33,
                                                                                                    'column': 25
                                                                                                },
                                                                                                'end': {
                                                                                                    'line': 33,
                                                                                                    'column': 48
                                                                                                },
                                                                                                'identifierName': 'isErrorMessageDisplayed'
                                                                                            },
                                                                                            'name': 'isErrorMessageDisplayed'
                                                                                        }
                                                                                    },
                                                                                    'arguments': []
                                                                                }
                                                                            ]
                                                                        },
                                                                        'computed': false,
                                                                        'property': {
                                                                            'type': 'Identifier',
                                                                            'start': 1124,
                                                                            'end': 1131,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 33,
                                                                                    'column': 52
                                                                                },
                                                                                'end': {
                                                                                    'line': 33,
                                                                                    'column': 59
                                                                                },
                                                                                'identifierName': 'toEqual'
                                                                            },
                                                                            'name': 'toEqual'
                                                                        }
                                                                    },
                                                                    'arguments': [
                                                                        {
                                                                            'type': 'BooleanLiteral',
                                                                            'start': 1132,
                                                                            'end': 1136,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 33,
                                                                                    'column': 60
                                                                                },
                                                                                'end': {
                                                                                    'line': 33,
                                                                                    'column': 64
                                                                                }
                                                                            },
                                                                            'value': true
                                                                        },
                                                                        {
                                                                            'type': 'StringLiteral',
                                                                            'start': 1138,
                                                                            'end': 1162,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 33,
                                                                                    'column': 66
                                                                                },
                                                                                'end': {
                                                                                    'line': 33,
                                                                                    'column': 90
                                                                                }
                                                                            },
                                                                            'extra': {
                                                                                'rawValue': 'Error message is shown',
                                                                                'raw': "'Error message is shown'"
                                                                            },
                                                                            'value': 'Error message is shown'
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                'type': 'ExpressionStatement',
                                                                'start': 1173,
                                                                'end': 1349,
                                                                'loc': {
                                                                    'start': {
                                                                        'line': 34,
                                                                        'column': 8
                                                                    },
                                                                    'end': {
                                                                        'line': 37,
                                                                        'column': 10
                                                                    }
                                                                },
                                                                'expression': {
                                                                    'type': 'CallExpression',
                                                                    'start': 1173,
                                                                    'end': 1348,
                                                                    'loc': {
                                                                        'start': {
                                                                            'line': 34,
                                                                            'column': 8
                                                                        },
                                                                        'end': {
                                                                            'line': 37,
                                                                            'column': 9
                                                                        }
                                                                    },
                                                                    'callee': {
                                                                        'type': 'MemberExpression',
                                                                        'start': 1173,
                                                                        'end': 1218,
                                                                        'loc': {
                                                                            'start': {
                                                                                'line': 34,
                                                                                'column': 8
                                                                            },
                                                                            'end': {
                                                                                'line': 34,
                                                                                'column': 53
                                                                            }
                                                                        },
                                                                        'object': {
                                                                            'type': 'CallExpression',
                                                                            'start': 1173,
                                                                            'end': 1208,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 34,
                                                                                    'column': 8
                                                                                },
                                                                                'end': {
                                                                                    'line': 34,
                                                                                    'column': 43
                                                                                }
                                                                            },
                                                                            'callee': {
                                                                                'type': 'Identifier',
                                                                                'start': 1173,
                                                                                'end': 1179,
                                                                                'loc': {
                                                                                    'start': {
                                                                                        'line': 34,
                                                                                        'column': 8
                                                                                    },
                                                                                    'end': {
                                                                                        'line': 34,
                                                                                        'column': 14
                                                                                    },
                                                                                    'identifierName': 'expect'
                                                                                },
                                                                                'name': 'expect'
                                                                            },
                                                                            'arguments': [
                                                                                {
                                                                                    'type': 'CallExpression',
                                                                                    'start': 1180,
                                                                                    'end': 1207,
                                                                                    'loc': {
                                                                                        'start': {
                                                                                            'line': 34,
                                                                                            'column': 15
                                                                                        },
                                                                                        'end': {
                                                                                            'line': 34,
                                                                                            'column': 42
                                                                                        }
                                                                                    },
                                                                                    'callee': {
                                                                                        'type': 'MemberExpression',
                                                                                        'start': 1180,
                                                                                        'end': 1205,
                                                                                        'loc': {
                                                                                            'start': {
                                                                                                'line': 34,
                                                                                                'column': 15
                                                                                            },
                                                                                            'end': {
                                                                                                'line': 34,
                                                                                                'column': 40
                                                                                            }
                                                                                        },
                                                                                        'object': {
                                                                                            'type': 'Identifier',
                                                                                            'start': 1180,
                                                                                            'end': 1189,
                                                                                            'loc': {
                                                                                                'start': {
                                                                                                    'line': 34,
                                                                                                    'column': 15
                                                                                                },
                                                                                                'end': {
                                                                                                    'line': 34,
                                                                                                    'column': 24
                                                                                                },
                                                                                                'identifierName': 'LoginPage'
                                                                                            },
                                                                                            'name': 'LoginPage'
                                                                                        },
                                                                                        'computed': false,
                                                                                        'property': {
                                                                                            'type': 'Identifier',
                                                                                            'start': 1190,
                                                                                            'end': 1205,
                                                                                            'loc': {
                                                                                                'start': {
                                                                                                    'line': 34,
                                                                                                    'column': 25
                                                                                                },
                                                                                                'end': {
                                                                                                    'line': 34,
                                                                                                    'column': 40
                                                                                                },
                                                                                                'identifierName': 'getErrorMessage'
                                                                                            },
                                                                                            'name': 'getErrorMessage'
                                                                                        }
                                                                                    },
                                                                                    'arguments': []
                                                                                }
                                                                            ]
                                                                        },
                                                                        'computed': false,
                                                                        'property': {
                                                                            'type': 'Identifier',
                                                                            'start': 1209,
                                                                            'end': 1218,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 34,
                                                                                    'column': 44
                                                                                },
                                                                                'end': {
                                                                                    'line': 34,
                                                                                    'column': 53
                                                                                },
                                                                                'identifierName': 'toContain'
                                                                            },
                                                                            'name': 'toContain'
                                                                        }
                                                                    },
                                                                    'extra': {
                                                                        'trailingComma': 1337
                                                                    },
                                                                    'arguments': [
                                                                        {
                                                                            'type': 'StringLiteral',
                                                                            'start': 1232,
                                                                            'end': 1285,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 35,
                                                                                    'column': 12
                                                                                },
                                                                                'end': {
                                                                                    'line': 35,
                                                                                    'column': 65
                                                                                }
                                                                            },
                                                                            'extra': {
                                                                                'rawValue': 'Epic sadface: Sorry, this user has been locked out.',
                                                                                'raw': "'Epic sadface: Sorry, this user has been locked out.'"
                                                                            },
                                                                            'value': 'Epic sadface: Sorry, this user has been locked out.'
                                                                        },
                                                                        {
                                                                            'type': 'StringLiteral',
                                                                            'start': 1299,
                                                                            'end': 1337,
                                                                            'loc': {
                                                                                'start': {
                                                                                    'line': 36,
                                                                                    'column': 12
                                                                                },
                                                                                'end': {
                                                                                    'line': 36,
                                                                                    'column': 50
                                                                                }
                                                                            },
                                                                            'extra': {
                                                                                'rawValue': 'The error message is not as expected',
                                                                                'raw': "'The error message is not as expected'"
                                                                            },
                                                                            'value': 'The error message is not as expected'
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ],
                                                        'directives': []
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ],
                                'directives': []
                            }
                        }
                    ]
                }
            }
        ],
        'directives': []
    },
    'comments': [
        {
            'type': 'CommentLine',
            'value': ' Wait for the inventory screen and check it',
            'start': 612,
            'end': 657,
            'loc': {
                'start': {
                    'line': 21,
                    'column': 8
                },
                'end': {
                    'line': 21,
                    'column': 53
                }
            }
        },
        {
            'type': 'CommentLine',
            'value': " It doesn't matter which error we check, all errors should be checked in a UT",
            'start': 879,
            'end': 958,
            'loc': {
                'start': {
                    'line': 29,
                    'column': 8
                },
                'end': {
                    'line': 29,
                    'column': 87
                }
            }
        },
        {
            'type': 'CommentLine',
            'value': ' With this UT we just check that A failure is triggered',
            'start': 967,
            'end': 1024,
            'loc': {
                'start': {
                    'line': 30,
                    'column': 8
                },
                'end': {
                    'line': 30,
                    'column': 65
                }
            }
        }
    ]
};
const transformFromAstSyncOne =  {
    'metadata': {},
    'options': {
        'cloneInputAst': true,
        'babelrc': false,
        'configFile': false,
        'passPerPreset': false,
        'envName': 'test',
        'cwd': '/Users/wimselles/Sauce/Git/sauce-training/demo-js/webdriverio/web/framework',
        'root': '/Users/wimselles/Sauce/Git/sauce-training/demo-js/webdriverio/web/framework',
        'plugins': [
            {
                'key': 'proposal-private-methods',
                'visitor': {
                    'PrivateName': {
                        'enter': [
                            null
                        ]
                    },
                    'ExportDefaultDeclaration': {
                        'enter': [
                            null
                        ]
                    },
                    '_exploded': true,
                    '_verified': true,
                    'ClassExpression': {
                        'enter': [
                            null
                        ]
                    },
                    'ClassDeclaration': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {}
            },
            {
                'key': 'proposal-numeric-separator',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'NumericLiteral': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'proposal-logical-assignment-operators',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'AssignmentExpression': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'proposal-nullish-coalescing-operator',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'LogicalExpression': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'proposal-optional-chaining',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'OptionalCallExpression': {
                        'enter': [
                            null
                        ]
                    },
                    'OptionalMemberExpression': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'syntax-json-strings',
                'visitor': {
                    '_exploded': true,
                    '_verified': true
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'syntax-optional-catch-binding',
                'visitor': {
                    '_exploded': true,
                    '_verified': true
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'syntax-async-generators',
                'visitor': {
                    '_exploded': true,
                    '_verified': true
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'syntax-object-rest-spread',
                'visitor': {
                    '_exploded': true,
                    '_verified': true
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'proposal-export-namespace-from',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'ExportNamedDeclaration': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'transform-modules-commonjs',
                'visitor': {
                    'CallExpression': {
                        'enter': [
                            null
                        ]
                    },
                    'Program': {
                        'exit': [
                            null
                        ]
                    },
                    '_exploded': true,
                    '_verified': true
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'proposal-dynamic-import',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'Program': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            }
        ],
        'presets': [],
        'parserOpts': {
            'sourceType': 'module',
            'plugins': [
                'classPrivateMethods',
                'numericSeparator',
                'logicalAssignment',
                'nullishCoalescingOperator',
                'optionalChaining',
                'jsonStrings',
                'optionalCatchBinding',
                'asyncGenerators',
                'objectRestSpread',
                'exportNamespaceFrom',
                'dynamicImport'
            ]
        },
        'generatorOpts': {
            'comments': true,
            'compact': 'auto',
            'sourceMaps': false,
            'sourceFileName': 'unknown'
        }
    },
    'ast': null,
    'code': "\"use strict\";\n\nvar _e2eConstants = require(\"../configs/e2eConstants\");\n\nvar _LoginPage = _interopRequireDefault(require(\"../page-objects/LoginPage\"));\n\nvar _SwagOverviewPage = _interopRequireDefault(require(\"../page-objects/SwagOverviewPage\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndescribe(\"LoginPage (1-3)\", () => {\n  beforeEach(() => {\n    browser.url('');\n\n    _LoginPage.default.waitForIsShown();\n  });\n  it('should be able to test loading of login page', () => {\n    expect(_LoginPage.default.waitForIsShown()).toEqual(true, 'LoginPage page was not shown');\n  });\n});",
    'map': null,
    'sourceType': 'script'
}
const transformFromAstSyncTwo =  {
    'metadata': {},
    'options': {
        'cloneInputAst': true,
        'babelrc': false,
        'configFile': false,
        'passPerPreset': false,
        'envName': 'test',
        'cwd': '/Users/wimselles/Sauce/Git/sauce-training/demo-js/webdriverio/web/framework',
        'root': '/Users/wimselles/Sauce/Git/sauce-training/demo-js/webdriverio/web/framework',
        'plugins': [
            {
                'key': 'proposal-private-methods',
                'visitor': {
                    'PrivateName': {
                        'enter': [
                            null
                        ]
                    },
                    'ExportDefaultDeclaration': {
                        'enter': [
                            null
                        ]
                    },
                    '_exploded': true,
                    '_verified': true,
                    'ClassExpression': {
                        'enter': [
                            null
                        ]
                    },
                    'ClassDeclaration': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {}
            },
            {
                'key': 'proposal-numeric-separator',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'NumericLiteral': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'proposal-logical-assignment-operators',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'AssignmentExpression': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'proposal-nullish-coalescing-operator',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'LogicalExpression': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'proposal-optional-chaining',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'OptionalCallExpression': {
                        'enter': [
                            null
                        ]
                    },
                    'OptionalMemberExpression': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'syntax-json-strings',
                'visitor': {
                    '_exploded': true,
                    '_verified': true
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'syntax-optional-catch-binding',
                'visitor': {
                    '_exploded': true,
                    '_verified': true
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'syntax-async-generators',
                'visitor': {
                    '_exploded': true,
                    '_verified': true
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'syntax-object-rest-spread',
                'visitor': {
                    '_exploded': true,
                    '_verified': true
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'proposal-export-namespace-from',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'ExportNamedDeclaration': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'transform-modules-commonjs',
                'visitor': {
                    'CallExpression': {
                        'enter': [
                            null
                        ]
                    },
                    'Program': {
                        'exit': [
                            null
                        ]
                    },
                    '_exploded': true,
                    '_verified': true
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'proposal-dynamic-import',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'Program': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            }
        ],
        'presets': [],
        'parserOpts': {
            'sourceType': 'module',
            'plugins': [
                'classPrivateMethods',
                'numericSeparator',
                'logicalAssignment',
                'nullishCoalescingOperator',
                'optionalChaining',
                'jsonStrings',
                'optionalCatchBinding',
                'asyncGenerators',
                'objectRestSpread',
                'exportNamespaceFrom',
                'dynamicImport'
            ]
        },
        'generatorOpts': {
            'comments': true,
            'compact': 'auto',
            'sourceMaps': false,
            'sourceFileName': 'unknown'
        }
    },
    'ast': null,
    'code': "\"use strict\";\n\nvar _e2eConstants = require(\"../configs/e2eConstants\");\n\nvar _LoginPage = _interopRequireDefault(require(\"../page-objects/LoginPage\"));\n\nvar _SwagOverviewPage = _interopRequireDefault(require(\"../page-objects/SwagOverviewPage\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndescribe(\"LoginPage (2-3)\", () => {\n  beforeEach(() => {\n    browser.url('');\n\n    _LoginPage.default.waitForIsShown();\n  });\n  it('should be able to login with a standard user', () => {\n    _LoginPage.default.signIn(_e2eConstants.LOGIN_USERS.STANDARD); // Wait for the inventory screen and check it\n\n\n    expect(_SwagOverviewPage.default.waitForIsShown()).toEqual(true, 'Inventory List screen was not shown');\n  });\n});",
    'map': null,
    'sourceType': 'script'
}
const transformFromAstSyncThree =  {
    'metadata': {},
    'options': {
        'cloneInputAst': true,
        'babelrc': false,
        'configFile': false,
        'passPerPreset': false,
        'envName': 'test',
        'cwd': '/Users/wimselles/Sauce/Git/sauce-training/demo-js/webdriverio/web/framework',
        'root': '/Users/wimselles/Sauce/Git/sauce-training/demo-js/webdriverio/web/framework',
        'plugins': [
            {
                'key': 'proposal-private-methods',
                'visitor': {
                    'PrivateName': {
                        'enter': [
                            null
                        ]
                    },
                    'ExportDefaultDeclaration': {
                        'enter': [
                            null
                        ]
                    },
                    '_exploded': true,
                    '_verified': true,
                    'ClassExpression': {
                        'enter': [
                            null
                        ]
                    },
                    'ClassDeclaration': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {}
            },
            {
                'key': 'proposal-numeric-separator',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'NumericLiteral': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'proposal-logical-assignment-operators',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'AssignmentExpression': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'proposal-nullish-coalescing-operator',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'LogicalExpression': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'proposal-optional-chaining',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'OptionalCallExpression': {
                        'enter': [
                            null
                        ]
                    },
                    'OptionalMemberExpression': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'syntax-json-strings',
                'visitor': {
                    '_exploded': true,
                    '_verified': true
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'syntax-optional-catch-binding',
                'visitor': {
                    '_exploded': true,
                    '_verified': true
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'syntax-async-generators',
                'visitor': {
                    '_exploded': true,
                    '_verified': true
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'syntax-object-rest-spread',
                'visitor': {
                    '_exploded': true,
                    '_verified': true
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'proposal-export-namespace-from',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'ExportNamedDeclaration': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'transform-modules-commonjs',
                'visitor': {
                    'CallExpression': {
                        'enter': [
                            null
                        ]
                    },
                    'Program': {
                        'exit': [
                            null
                        ]
                    },
                    '_exploded': true,
                    '_verified': true
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            },
            {
                'key': 'proposal-dynamic-import',
                'visitor': {
                    '_exploded': {},
                    '_verified': {},
                    'Program': {
                        'enter': [
                            null
                        ]
                    }
                },
                'options': {
                    'spec': false,
                    'loose': false,
                    'useBuiltIns': false
                }
            }
        ],
        'presets': [],
        'parserOpts': {
            'sourceType': 'module',
            'plugins': [
                'classPrivateMethods',
                'numericSeparator',
                'logicalAssignment',
                'nullishCoalescingOperator',
                'optionalChaining',
                'jsonStrings',
                'optionalCatchBinding',
                'asyncGenerators',
                'objectRestSpread',
                'exportNamespaceFrom',
                'dynamicImport'
            ]
        },
        'generatorOpts': {
            'comments': true,
            'compact': 'auto',
            'sourceMaps': false,
            'sourceFileName': 'unknown'
        }
    },
    'ast': null,
    'code': "\"use strict\";\n\nvar _e2eConstants = require(\"../configs/e2eConstants\");\n\nvar _LoginPage = _interopRequireDefault(require(\"../page-objects/LoginPage\"));\n\nvar _SwagOverviewPage = _interopRequireDefault(require(\"../page-objects/SwagOverviewPage\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndescribe(\"LoginPage (3-3)\", () => {\n  beforeEach(() => {\n    browser.url('');\n\n    _LoginPage.default.waitForIsShown();\n  });\n  it('should not be able to login with a locked user', () => {\n    // It doesn't matter which error we check, all errors should be checked in a UT\n    // With this UT we just check that A failure is triggered\n    _LoginPage.default.signIn(_e2eConstants.LOGIN_USERS.LOCKED);\n\n    expect(_LoginPage.default.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');\n    expect(_LoginPage.default.getErrorMessage()).toContain('Epic sadface: Sorry, this user has been locked out.', 'The error message is not as expected');\n  });\n});",
    'map': null,
    'sourceType': 'script'
};

export {
    ast,
    transformFromAstSyncOne,
    transformFromAstSyncTwo,
    transformFromAstSyncThree
}
