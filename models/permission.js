const mongoose = require('mongoose');
const db = require('../dbConnection');

const permissionSchema = new mongoose.Schema({
    roleId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    permission: {
        type: String,
        required: true
    }
});

module.exports = db.model('Permission', permissionSchema, 'permissions');;
