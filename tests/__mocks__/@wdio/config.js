class ConfigParserMock {
    constructor () {
        this.getSpecs = jest.fn().mockImplementation((args) => args);
    }
}

export const ConfigParser = ConfigParserMock
