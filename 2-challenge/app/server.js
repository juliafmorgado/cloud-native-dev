const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

// Configure PostgreSQL connection
// Since you've not specified a username or password, we'll omit these fields.
// This configuration assumes your PostgreSQL server allows you to connect using the default method.
const pool = new Pool({
  database: 'challenge2', // Ensure this database exists in your PostgreSQL server
});

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to save text
app.post('/save', async (req, res) => {
  const { text } = req.body;
  try {
    const result = await pool.query('INSERT INTO texts (content) VALUES ($1) RETURNING *', [text]);
    res.status(201).send({ message: 'Text saved successfully', text: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Failed to save text' });
  }
});

// Endpoint to get all texts
app.get('/all', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM texts ORDER BY created_at DESC');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Failed to retrieve texts' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
