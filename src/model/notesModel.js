const db = require('../config/database');

const NotesModel = {
    getAllNotes: (callback) => {
        const query = 'SELECT * FROM notes';
        db.query(query, callback);
    },
    getNoteById: (id, callback) => {
        const query = 'SELECT * FROM notes WHERE id = ?';
        db.query(query, [id], callback);
    },
    createNote: (data, callback) => {
        const query = 'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)';
        db.query(query, [data.title, data.datetime, data.note], callback);
    },
    updateNote: (id, data, callback) => {
        const query = 'UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?';
        db.query(query, [data.title, data.datetime, data.note, id], callback);
    },
    deleteNote: (id, callback) => {
        const query = 'DELETE FROM notes WHERE id = ?';
        db.query(query, [id], callback);
    },
};

module.exports = NotesModel;
