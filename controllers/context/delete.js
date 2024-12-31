const { ContextProvider } = require('../../providers/context');
const httperror = require('http-errors');

class DeleteContext {
    constructor(flightId) {
        this.flightId = flightId;
    }
    async execute() {
        try {
            const contextProvider = new ContextProvider();
            const result = await contextProvider.delete(this.flightId);
            if (!result) {
                throw new httperror(400, `Bad Request.`);
            }
            return 'Deleted Successfully.';
        } catch (error) {
            throw error;
        }
    }
}

exports.DeleteContext = DeleteContext;