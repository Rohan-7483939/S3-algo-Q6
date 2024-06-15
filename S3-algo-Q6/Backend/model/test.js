const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    username: {
        type: String,
        index: true
    },
    email: {
        type: String,
        index: true
    },
    address: {
        type: String,
        index: true
    },
    score: {
        type: Number,
    },
    _version: {
        type: Number,
        index: true
    },
    _created: {
        type: Date,
        default: Date.now
    },
    _created_by: {
        type: String,
        index: true
    },
    _mock: {
        type: Boolean,
        index: true
    }
}, { strict: false });

const Test = mongoose.model('test', TestSchema);

module.exports = Test;