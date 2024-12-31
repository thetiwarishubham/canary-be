const { ContextProvider } = require('../../providers/context');

class ListContextByName {
    constructor(name) {
        this.name = name;
    }
    async execute() {
        try {
            const contextProvider = new ContextProvider();
            const result = await contextProvider.listByName({name: this.name});
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.ListContextByName = ListContextByName;