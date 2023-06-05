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
    college: {
        type: String,
        default: '',
    },
    gender: {
        type: String,
        default: '',
    },
    profileImg: {
        type: String,
        default: '',

    }




});

module.exports = mongoose.model('user', userSchema);