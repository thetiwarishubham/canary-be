const { ContextProvider } = require('../../providers/context');
const httperror = require('http-errors');

class GetFlight {
    constructor(flightId) {
        this.flightId = flightId;
    }
    async execute() {
        try {
            const contextProvider = new ContextProvider();
            const result = await contextProvider.getById(this.flightId);
            if (!result) {
                throw new httperror(404, `Context not exists.`);
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.GetFlight = GetFlight;