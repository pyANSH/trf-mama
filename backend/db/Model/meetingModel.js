const mongoose = require('../db');

const scheduleSchema = new mongoose.Schema({
    scheduleMembers: {
        type: [String],
        required: true,
    },
    scheduleDate: {
        type: Date,
        required: true,
    },
    scheduleTime: {
        type: String,
        required: true,
    },
    scheduleDuration: {
        type: Number,
        required: true,
    },
    scheduleTopic: {
        type: String,
        required: true,
    },
    scheduleDescription: {
        type: String,
        required: true,
    },
    scheduleStatus: {
        type: String,
        required: true,
    },
    scheduleLink: {
        type: String,
        required: true,
    },
})

const meetingSchema = new mongoose.Schema({
    meetingId: {
        type: String,
        required: true,
    },
    meetingMembers: {
        type: [Object],
        required: true,
    },
    meetingDetails: {
        type: [scheduleSchema],
        required: true,
    },
})


module.exports = mongoose.model('meeting', meetingSchema);