const { UserProvider } = require('../../providers/user');
const httperror = require('http-errors');

class UpdateUser {
    constructor(flightId, updateObj) {
        this.flightId = flightId;
        this.updateObj = updateObj;
    }
    async execute() {
        try {
            const userProvider = new UserProvider();
            const result = await userProvider.update(this.flightId, this.updateObj);
            if (!result) {
                throw new httperror(400, `Bad Request.`);
            }
            return 'User Updated Successfully.';
        } catch (error) {
            throw error;
        }
    }
}

exports.UpdateUser = UpdateUser;