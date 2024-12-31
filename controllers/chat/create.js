const { ChatProvider } = require('../../providers/chat');
const { ContextProvider } = require('../../providers/context');
const httperror = require('http-errors');

class CreateChat {
    constructor(createObj) {
        this.createObj = createObj;
    }

    async execute() {
        try {
            const { language, message, context, role } = this.createObj;
            const userContext = await this.getUserContext();
            const systemContext = `Please use ${language} to answer customer queries:
                            ${userContext.role} ${role}, ${userContext.context}:

                            GraphQL Query:
                            ${userContext.query}

                            GraphQL Schema:
                            ${userContext.schema}

                             GraphQL MockApis:
                            ${userContext.mockApis}

                            Always try to answer based on this context, don't answer anything
        `;

            const chatProvider = new ChatProvider();
            const result = await chatProvider.getReply({systemContext, message});
            return {
                context: context,
                reply: result
            };
        } catch (error) {
            throw error;
        }
    }

    async getUserContext() {
        try {
            const contextProvider = new ContextProvider();
            const result = await contextProvider.getById(this.createObj.context);
            if (!result) {
                throw new httperror(404, `Context not exists.`);
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.CreateChat = CreateChat;