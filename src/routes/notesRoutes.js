const express = require('express');
const router = express.Router();
const NotesController = require('../controller/notesController');

router.get('/', NotesController.getAllNotes);
router.get('/:id', NotesController.getNoteById);
router.post('/', NotesController.createNote);
router.put('/:id', NotesController.updateNote);
router.delete('/:id', NotesController.deleteNote);

module.exports = router;
