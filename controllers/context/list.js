const { ContextProvider } = require('../../providers/context');

class GetAllContexts {
    constructor(search) {
        this.search = search;
    }
    async execute() {
        try {
            const contextProvider = new ContextProvider();
            const result = await contextProvider.list(this.search);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.GetAllContexts = GetAllContexts;