const { ChatProvider } = require('../../providers/chat');

class GetAllChats {
    constructor() {
    }
    async execute() {
        try {
            const chatProvider = new ChatProvider();
            const result = await chatProvider.list();
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.GetAllChats = GetAllChats;