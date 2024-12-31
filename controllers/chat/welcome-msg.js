const { ChatProvider } = require('../../providers/chat');
const httperror = require('http-errors');

class WelcomeMessage {
    constructor(createObj) {
        this.createObj = createObj;
    }
    async execute() {
        try {
            const greetTemplate = `Hello ${this.createObj.name || 'User'}!, Welcome to the chatbot. How can I assist you today?`;
            const systemContext = `Please use ${this.createObj.language} to greet customer, user name is ${this.createObj.name}. keep it very short & precise also Attach one line with meaning of user name:
            use this template: ${greetTemplate}
`;
            const chatProvider = new ChatProvider();
            const result = await chatProvider.welcomeMessage({systemContext});
            if (!result) {
                throw new httperror(400, `Bad Request.`);
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.WelcomeMessage = WelcomeMessage;