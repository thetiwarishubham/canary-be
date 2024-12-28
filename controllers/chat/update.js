const { ChatProvider } = require('../../providers/chat');
const httperror = require('http-errors');

class UpdateChat {
    constructor(flightId, updateObj) {
        this.flightId = flightId;
        this.updateObj = updateObj;
    }
    async execute() {
        try {
            const chatProvider = new ChatProvider();
            const result = await chatProvider.update(this.flightId, this.updateObj);
            if (!result) {
                throw new httperror(400, `Bad Request.`);
            }
            return 'Chat Updated Successfully.';
        } catch (error) {
            throw error;
        }
    }
}

exports.UpdateChat = UpdateChat;