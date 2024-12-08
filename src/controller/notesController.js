const NotesModel = require('../model/notesModel');

const NotesController = {
    getAllNotes: (req, res) => {
        NotesModel.getAllNotes((err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        });
    },
    getNoteById: (req, res) => {
        const id = req.params.id;
        NotesModel.getNoteById(id, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length === 0) return res.status(404).json({ message: 'Note not found' });
            res.json(results[0]);
        });
    },
    createNote: (req, res) => {
        const data = req.body;
        NotesModel.createNote(data, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Note created', id: results.insertId });
        });
    },
    updateNote: (req, res) => {
        const id = req.params.id;
        const data = req.body;
        NotesModel.updateNote(id, data, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Note updated' });
        });
    },
    deleteNote: (req, res) => {
        const id = req.params.id;
        NotesModel.deleteNote(id, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Note deleted' });
        });
    },
};

module.exports = NotesController;
