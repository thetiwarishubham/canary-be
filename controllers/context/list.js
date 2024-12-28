const { ContextProvider } = require('../../providers/context');

class GetAllFlights {
    constructor() {
    }
    async execute() {
        try {
            const contextProvider = new ContextProvider();
            const result = await contextProvider.list();
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.GetAllFlights = GetAllFlights;