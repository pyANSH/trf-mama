const mongoose = require('../db');

const userSchema = new mongoose.Schema({
    isMentor: {
        type: Boolean,
        default: false
    },
    userId: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    interests: {
        type: [String],
        default: [],
        required: true,
    },
    userFullName: {
        type: String,
        required: true,
    },
    socialRefferarId: {
        type: String,
    },
    meetings: {
        type: [Object],
        default: [],
    },
});

module.exports = mongoose.model('user', userSchema);