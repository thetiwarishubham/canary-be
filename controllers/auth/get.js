const { AuthProvider } = require('../../providers/auth');
const httperror = require('http-errors');

class GetAuth {
    constructor(flightId) {
        this.flightId = flightId;
    }
    async execute() {
        try {
            const authProvider = new AuthProvider();
            const result = await authProvider.getById(this.flightId);
            if (!result) {
                throw new httperror(404, `Flight not exists.`);
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.GetAuth = GetAuth;