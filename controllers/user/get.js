const { UserProvider } = require('../../providers/user');
const httperror = require('http-errors');

class GetUser {
    constructor(userId) {
        this.userId = userId;
    }
    async execute() {
        try {
            const userProvider = new UserProvider();
            const result = await userProvider.getById(this.userId);
            if (!result) {
                throw new httperror(404, `User not exists.`);
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.GetUser = GetUser;