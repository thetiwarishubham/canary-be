const { AuthProvider } = require('../../providers/auth');

class GetAllAuths {
    constructor() {
    }
    async execute() {
        try {
            const authProvider = new AuthProvider();
            const result = await authProvider.list();
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.GetAllAuths = GetAllAuths;