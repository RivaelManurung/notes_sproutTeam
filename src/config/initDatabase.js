const mysql = require("mysql2/promise");
require("dotenv").config();

const initDatabase = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
        });

        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE}`);
        console.log(`Database ${process.env.DATABASE} ensured.`);

        const db = await mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
        });

        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS notes (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                title TEXT NOT NULL,
                datetime DATETIME NOT NULL,
                note LONGTEXT NOT NULL
            )
        `;
        await db.query(createTableQuery);
        console.log("Table 'notes' ensured.");
        
        await db.end();
    } catch (error) {
        console.error("Error during database initialization:", error.message);
    }
};

module.exports = initDatabase;
