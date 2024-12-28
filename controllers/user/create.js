const { UserProvider } = require('../../providers/user');
const httperror = require('http-errors');

class CreateUser {
    constructor(createObj) {
        this.createObj = createObj;
    }

    async execute() {
        try {
            const userProvider = new UserProvider();
            await userProvider.create(this.createObj);
            return 'User Created Successfully';
        } catch (error) {
            throw error;
        }
    }
}

exports.CreateUser = CreateUser;