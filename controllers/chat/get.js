const { ChatProvider } = require('../../providers/chat');
const httperror = require('http-errors');

class GetChat {
    constructor(flightId) {
        this.flightId = flightId;
    }
    async execute() {
        try {
            const chatProvider = new ChatProvider();
            const result = await chatProvider.getById(this.flightId);
            if (!result) {
                throw new httperror(404, `Chat not exists.`);
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.GetChat = GetChat;