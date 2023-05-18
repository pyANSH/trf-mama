const mongoose = require('../db/db');

const scheduleSchema = new mongoose.Schema({
    mentorId: {
        type: String,
        required: true
    },
    menteeId: {
        type: String,
        required: true
    },
    meetingDate: {
        type: String,
        required: true
    },
    meetingTime: {
        type: String,
        required: true
    },
    meetingDuration: {
        type: String,
        required: true
    },
    meetingTopic: {
        type: String,
        required: true
    },
    meetingDescription: {
        type: String,
        required: true
    },
    meetingStatus: {
        type: String,
        default: 'pending',
        values: ['pending', 'accepted', 'rejected'],
        validate: {
            validator: function (v) {
                return v == 'pending' || v == 'accepted' || v == 'rejected';
            },
            message: props => `${props.value} is not a valid status`
        }
    },
    meetingURL:{
        type: String,
    }


})

module.exports = mongoose.model('meeting', scheduleSchema);