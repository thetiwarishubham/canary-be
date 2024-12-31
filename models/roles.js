const mongoose = require('mongoose');
const db = require('../dbConnection');

const rolesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = db.model('Roles', rolesSchema, 'roles');;
