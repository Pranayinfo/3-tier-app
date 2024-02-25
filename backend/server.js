// server.js
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'admin',
    password: 'admin@123',
    port: 5432,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API endpoint to handle data submission
app.post('/submit', async (req, res) => {
    try {
        const { data } = req.body;
        const client = await pool.connect();
        const result = await client.query('INSERT INTO your_table (data) VALUES ($1)', [data]);
        client.release();
        res.status(200).send('Data inserted successfully');
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send('Error inserting data');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
