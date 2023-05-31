const userModal = require('../Model/userModal');
const notesModel = require('../Model/notesModal');
const jwt = require('jsonwebtoken');
const notesModal = require('../Model/notesModal');
require('dotenv').config();

exports.upload_notes = async (req, res) => {
  const {
    fileUrl,
    userId,
    fileName,
    fileSize,
    noteTitle,
    fileType,
    category,
    description,
    tags,
    quality,
    readabilityScore,
  } = req.body;
  const user = await userModal.findById(userId);
  if (
    !fileUrl ||
    !userId ||
    !fileName ||
    !fileSize ||
    !noteTitle ||
    !fileType ||
    !category ||
    !description ||
    !tags
  ) {
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
      tags,
      quality: quality || 0,
      readabilityScore: readabilityScore || 0,
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
  const { userId, category, noteId, allNotes } = req.query;
  if (
    category === undefined &&
    noteId === undefined &&
    userId === undefined &&
    allNotes === undefined
  ) {
    return res.status(400).json({
      error: 'no query found',
      data: [],
    });
  }
  if (allNotes === 'true') {
    const notes = await notesModel.find();
    if (notes) {
      return res.status(200).json({
        response: 'Notes found',
        data: notes,
      });
    } else {
      return res.status(201).json({
        response: 'Notes found',
        data: [],
      });
    }
  } else {
    const notes = await notesModel.find({
      $or: [{ userId }, { category }, { _id: noteId }],
    });
    if (notes) {
      return res.status(200).json({
        response: 'Notes found',
        data: notes,
      });
    } else {
      return res.status(204).json({
        response: 'Notes not found',
        data: [],
      });
    }
  }
};
exports.update_notes = async (req, res) => {
  const { noteId, userId, noteTitle, category, description, tags, viewCount, readabilityScore, quality } = req.body;
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
    if (readabilityScore) {
      notes.readabilityScore = readabilityScore;
    }
    if (quality) {
      notes.quality = quality;
    }
    if (viewCount) {
      notes.viewCount = viewCount;
    }
    await notes.save();
    return res.status(200).json({
      response: 'Notes updated',
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
      response: 'Notes deleted',
      data: deleteNotes,
    });
  } else {
    return res.status(401).json({
      error: 'Notes not found',
    });
  }
};


exports.getRanking = async (req, res) => {
  try {
    const topViewedNotes = await notesModal.find()
      .sort({ viewCount: -1 })
      .limit(3);

    // Extract the userIds from the top viewed notes
    const userIds = topViewedNotes.map(note => note.userId);
console.log(userIds);
    // Retrieve the users based on the userIds
    const users = await userModal.find({ _id: { $in: userIds } });
console.log(users);
    // Map the users to an object with userId as key
    const usersMap = users.reduce((map, user) => {
      map[user._id.toString()] = user;
      return map;
    }, {});
console.log(usersMap);
    // Add the user object to each note
    const topViewedNotesWithUser = topViewedNotes.map(note => ({
      ...notesModal.toObject(),
      user: usersMap[note.userId]
    }));

    res.json(topViewedNotesWithUser);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred' });
  }
};