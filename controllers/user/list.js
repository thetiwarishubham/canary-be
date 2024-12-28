const { UserProvider } = require('../../providers/user');

class GetAllUsers {
    constructor() {
    }
    async execute() {
        try {
            const userProvider = new UserProvider();
            const result = await userProvider.list();
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.GetAllUsers = GetAllUsers;