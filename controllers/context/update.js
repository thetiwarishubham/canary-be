const { ContextProvider } = require('../../providers/context');
const httperror = require('http-errors');

class UpdateContext {
    constructor(flightId, updateObj) {
        this.flightId = flightId;
        this.updateObj = updateObj;
    }
    async execute() {
        try {
            const contextProvider = new ContextProvider();
            const result = await contextProvider.update(this.flightId, this.updateObj);
            if (!result) {
                throw new httperror(400, `Bad Request.`);
            }
            return 'Context Updated Successfully.';
        } catch (error) {
            throw error;
        }
    }
}

exports.UpdateContext = UpdateContext;