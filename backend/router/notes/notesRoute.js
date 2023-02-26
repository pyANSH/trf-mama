const express = require('express');
const router = express.Router();
const notesController = require('../../controller/notes');
require('dotenv').config();

router.post('/upload', notesController.upload_notes);
router.get('/getNotes', notesController.get_notes);
router.put('/updateNotes', notesController.update_notes);


router.delete('/deleteNotes', notesController.delete_notes);

module.exports = router;