const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the file path for storing data
const FILE_PATH = path.join(__dirname, 'texts.json');

// Initialize the file with an empty array if it doesn't exist
if (!fs.existsSync(FILE_PATH)) {
  fs.writeFileSync(FILE_PATH, JSON.stringify([]), 'utf8');
}

// Helper function to read texts from file
function readTextsFromFile() {
  const fileContents = fs.readFileSync(FILE_PATH, 'utf8');
  return JSON.parse(fileContents);
}

// Helper function to save texts to file
function saveTextsToFile(texts) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(texts, null, 2), 'utf8');
}

// Endpoint to save text
app.post('/save', (req, res) => {
  const { text } = req.body;
  const texts = readTextsFromFile();
  texts.push(text);
  saveTextsToFile(texts);
  res.status(201).send({ message: 'Text saved successfully' });
});

// Endpoint to get all texts
app.get('/all', (req, res) => {
  const texts = readTextsFromFile();
  res.status(200).json(texts);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
