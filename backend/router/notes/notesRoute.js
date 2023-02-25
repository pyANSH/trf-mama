const express = require('express');
const router = express.Router();
const userModal = require('../../Model/userModal');
const notesModel = require('../../Model/notesModal');
require('dotenv').config();

router.post('/upload', async (req, res) => {
    const { fileUrl, userId, fileName, fileSize, noteTitle, fileType, category, description } = req.body;
    const user = await userModal.findById(userId);
    if (!fileUrl || !userId || !fileName || !fileSize || !noteTitle || !fileType || !category || !description) {
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
});
router.get('/getNotes', async (req, res) => {
    const { userId, category } = req.query;
    if (category === 'All') {
        await notesModel.find({ userId }).then((notes) => {
            return res.status(200).json({
                response: "Notes found",
                data: notes,
            });
        }
        ).catch((err) => {
            return res.status(401).json({
                error: err,
            });
        });
    }
    const notes = await notesModel.find({ $or: [{ userId }, { category }] });
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
});



module.exports = router;