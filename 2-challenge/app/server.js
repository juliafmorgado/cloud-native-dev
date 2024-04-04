const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// In-memory store
const texts = [];

// Endpoint to save text
app.post('/save', (req, res) => {
  const { text } = req.body;
  texts.push(text);
  res.status(201).send({ message: 'Text saved successfully' });
});

// Endpoint to get all texts
app.get('/all', (req, res) => {
  res.status(200).json(texts);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
