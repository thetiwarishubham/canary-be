const { ChatProvider } = require('../../providers/chat');
const httperror = require('http-errors');

class CreateChat {
    constructor(createObj) {
        this.createObj = createObj;
    }

    async execute() {
        try {
            const chatProvider = new ChatProvider();
            await chatProvider.create(this.createObj);
            return 'Flight Created Successfully';
        } catch (error) {
            throw error;
        }
    }
}

exports.CreateChat = CreateChat;