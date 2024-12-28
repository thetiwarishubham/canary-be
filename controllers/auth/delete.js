const { AuthProvider } = require('../../providers/auth');
const httperror = require('http-errors');

class DeleteAuth {
    constructor(flightId) {
        this.flightId = flightId;
    }
    async execute() {
        try {
            const authProvider = new AuthProvider();
            const result = await authProvider.delete(this.flightId);
            if (!result) {
                throw new httperror(400, `Bad Request.`);
            }
            return 'Deleted Successfully.';
        } catch (error) {
            throw error;
        }
    }
}

exports.DeleteAuth = DeleteAuth;