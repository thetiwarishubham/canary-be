const { AuthProvider } = require('../../providers/auth');
const httperror = require('http-errors');

class UpdateAuth {
    constructor(flightId, updateObj) {
        this.flightId = flightId;
        this.updateObj = updateObj;
    }
    async execute() {
        try {
            const authProvider = new AuthProvider();
            const result = await authProvider.update(this.flightId, this.updateObj);
            if (!result) {
                throw new httperror(400, `Bad Request.`);
            }
            return 'Flight Updated Successfully.';
        } catch (error) {
            throw error;
        }
    }
}

exports.UpdateAuth = UpdateAuth;