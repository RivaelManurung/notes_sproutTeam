const express = require('express');
const notesRoutes = require('./src/routes/notesRoutes');
const initDatabase = require('./src/config/initDatabase'); // Import initDatabase
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT || 3000;

// Inisialisasi database
initDatabase();

app.use(express.json());
app.use('/api/notes', notesRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
