const { UserProvider } = require('../../providers/user');
const httperror = require('http-errors');

class GetUser {
    constructor(flightId) {
        this.flightId = flightId;
    }
    async execute() {
        try {
            const userProvider = new UserProvider();
            const result = await userProvider.getById(this.flightId);
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