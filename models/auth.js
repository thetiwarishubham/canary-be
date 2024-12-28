const mongoose = require('mongoose');
const db = require('../dbConnection');

const authSchema = new mongoose.Schema({
  flightNumber: {
    type: String,
    required: true
  },
  airline: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  departureTime: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['On Time', 'Delayed', 'Departed', 'Boarding']
  }
});

module.exports = db.model('Auth', authSchema, 'auth');;
