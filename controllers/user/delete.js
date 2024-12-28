const { UserProvider } = require('../../providers/user');
const httperror = require('http-errors');

class DeleteUser {
    constructor(flightId) {
        this.flightId = flightId;
    }
    async execute() {
        try {
            const userProvider = new UserProvider();
            const result = await userProvider.delete(this.resultId);
            if (!result) {
                throw new httperror(400, `Bad Request.`);
            }
            return 'Deleted Successfully.';
        } catch (error) {
            throw error;
        }
    }
}

exports.DeleteUser = DeleteUser;