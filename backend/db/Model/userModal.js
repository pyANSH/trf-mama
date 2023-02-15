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
});

module.exports = mongoose.model('user', userSchema);