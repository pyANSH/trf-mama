const userModal = require('../Model/userModal');
const notesModel = require('../Model/notesModal');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.upload_notes = async (req, res) => {
    const { fileUrl, userId, fileName, fileSize, noteTitle, fileType, category, description, tags } = req.body;
    const user = await userModal.findById(userId);
    if (!fileUrl || !userId || !fileName || !fileSize || !noteTitle || !fileType || !category || !description || !tags) {
        return res.status(400).json({
            error: 'Please fill all the fields',
        });
    }
    if (user) {
        const notes = new notesModel({
            fileUrl,
            userId,
            fileName,
            fileSize,
            noteTitle,
            fileType,
            category,
            description,
            tags
        });
        await notes.save();
        return res.status(200).json({
            data: notes,
        });
    } else {
        return res.status(401).json({
            error: 'User not found',
        });
    }
};
exports.get_notes = async (req, res) => {
    const { userId, category, noteId } = req.query;
    if (category === undefined && noteId === undefined && userId === undefined) {
        return res.status(400).json({
            error: 'no query found',
        });
    }
    else {
        const notes = await notesModel.find({ $or: [{ userId }, { category }, { _id: noteId }] });
        if (notes) {
            return res.status(200).json({
                response: "Notes found",
                data: notes,
            });
        } else {
            return res.status(401).json({
                error: 'User not found',
            });
        }
    }
};
exports.update_notes = async (req, res) => {
    const { noteId, userId, noteTitle, category, description, tags } = req.body;
    const { token } = req.headers;
    if (!noteId || !userId || !noteTitle || !category || !description || !tags) {
        return res.status(400).json({
            error: 'Please fill all the fields',
        });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({
                error: 'Unauthorized',
            });
        }
        if (decodedToken.id !== userId) {
            return res.status(423).json({
                error: 'you are not allowed to update this notes',
            });
        }
    });

    const notes = await notesModel.findById(noteId);
    if (notes) {
        notes.noteTitle = noteTitle;
        notes.category = category;
        notes.description = description;
        notes.tags = tags;
        await notes.save();
        return res.status(200).json({
            response: "Notes updated",
            data: notes,
        });
    } else {
        return res.status(401).json({
            error: 'Notes not found',
        });
    }
};
exports.delete_notes = async (req, res) => {
    const { noteId, userId } = req.body;
    const { token } = req.headers;
    if (!noteId || !userId) {
        return res.status(400).json({
            error: 'Please fill all the fields',
        });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({
                error: 'Unauthorized',
            });
        }
        if (decodedToken.id !== userId) {
            return res.status(423).json({
                error: 'you are not allowed to delete this notes',
            });
        }
    });

    const deleteNotes = await notesModel.findByIdAndDelete(noteId);
    if (deleteNotes) {
        return res.status(200).json({
            response: "Notes deleted",
            data: deleteNotes,
        });
    } else {
        return res.status(401).json({
            error: 'Notes not found',
        });
    }
};
