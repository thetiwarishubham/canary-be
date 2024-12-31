const { AuthProvider } = require('../../providers/auth');
const httperror = require('http-errors');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my_secret_key';


class LoginUser {
    constructor(createObj) {
        this.createObj = createObj;
        this.users = [
            { id: 1, username: 'user1', password: 'password123' },
            { id: 2, username: 'user2', password: 'password456' },
            { id: 3, username: 'admin', password: 'pass' }
        ];
    }

    async execute() {
        try {
            const user = this.users.find(u => u.username === this.createObj.username && u.password === this.createObj.pass);
            console.log('user', user, this.createObj);

            if (!user) {
                throw new httperror(401, 'Invalid username or password');
            }
            // Generate JWT token
            const token = jwt.sign({ username: this.createObj.username }, SECRET_KEY, { expiresIn: '12h' });
            console.log('token', token);
            return { message: 'Login successful', token };
        } catch (error) {
            throw error;
        }
    }
}

exports.LoginUser = LoginUser;