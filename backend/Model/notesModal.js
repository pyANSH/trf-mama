const mongoose = require('mongoose');

const notesShcema = mongoose.Schema({
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
});
module.exports = mongoose.model('notes', notesShcema);
