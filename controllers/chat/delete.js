const { ChatProvider } = require('../../providers/chat');
const httperror = require('http-errors');

class DeleteChat {
    constructor(flightId) {
        this.flightId = flightId;
    }
    async execute() {
        try {
            const flightProvider = new ChatProvider();
            const result = await chatProvider.delete(this.resultId);
            if (!flight) {
                throw new httperror(400, `Bad Request.`);
            }
            return 'Deleted Successfully.';
        } catch (error) {
            throw error;
        }
    }
}

exports.DeleteChat = DeleteChat;