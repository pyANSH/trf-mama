const mongoose = require('../db/db');

const userSchema = new mongoose.Schema({
    isMentor: {
        type: Boolean,
        default: false
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
    socialRefererId: {
        type: String,
    },
    meetings: {
        type: [Object],
        default: [],
    },
});

module.exports = mongoose.model('user', userSchema);