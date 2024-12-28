const { ContextProvider } = require('../../providers/context');
const httperror = require('http-errors');

class CreateContext {
    constructor(createObj) {
        this.createObj = createObj;
    }

    async execute() {
        try {
            const contextProvider = new ContextProvider();
            await contextProvider.create(this.createObj);
            return 'Context Created Successfully';
        } catch (error) {
            throw error;
        }
    }
}

exports.CreateContext = CreateContext;