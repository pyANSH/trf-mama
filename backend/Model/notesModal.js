const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
    fileUrl: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,

    },
    fileName: {
        type: String,
        required: true,
    },
    fileSize: {
        type: String,
        required: true,

    },
    noteTitle: {
        type: String,
        required: true,
    },
    fileType: {
        type: String,
        required: true,
    },
    category: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    rating: {
        type: Number,
        default: 0,

    },
    viewCount: {
        type: Number,
        default: 0,

    },
});
module.exports = mongoose.model('notes', notesSchema);
