const { UserProvider } = require('../../providers/user');
const httperror = require('http-errors');

class UpdateUser {
    constructor(userId, updateObj) {
        this.userId = userId;
        this.updateObj = updateObj;
    }
    async execute() {
        try {
            const userProvider = new UserProvider();
            const result = await userProvider.update(this.userId, this.updateObj);
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