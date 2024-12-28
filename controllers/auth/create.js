const { AuthProvider } = require('../../providers/auth');
const httperror = require('http-errors');

class CreateAuth {
    constructor(createObj) {
        this.createObj = createObj;
    }

    async execute() {
        try {
            const authProvider = new AuthProvider();
            await authProvider.create(this.createObj);
            return 'Auth Created Successfully';
        } catch (error) {
            throw error;
        }
    }
}

exports.CreateAuth = CreateAuth;