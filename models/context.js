const mongoose = require('mongoose');
const db = require('../dbConnection');

const contextSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Name of the item
    type: { type: String, required: true, enum: ['GraphQL', 'Document'] }, // Type: GraphQL Query or Document
    role: { type: String }, // Role description
    context: { type: String }, // Context description
    query: { type: String }, // GraphQL query, required for 'GraphQL Query' type
    schema: { type: mongoose.Schema.Types.Mixed }, // JSON schema for GraphQL type
    mockApis: { type: mongoose.Schema.Types.Mixed }, // Mock APIs and their responses
    text: { type: String }, // Text field for 'Document' type
}, { timestamps: true });

module.exports = db.model('Context', contextSchema, 'contexts');;
