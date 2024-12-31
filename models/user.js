const mongoose = require('mongoose');
const db = require('../dbConnection');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true, // Ensures 'username' is unique
    },
    password: {
      type: String,
      required: true,
    }
  });

module.exports = db.model('User', userSchema, 'users');;
