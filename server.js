const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/', limits: { fileSize: 10 * 1024 * 1024 } });

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// In-memory database (will reset on server restart)
let gallery = [];
let nextId = 1;

// GET all artworks
app.get('/api/artworks', (req, res) => {
  res.json(gallery);
});

// POST a new artwork
app.post('/api/artworks', (req, res) => {
  const { title, artist, year, story, imageData } = req.body;
  
  if (!title || !artist || !year || !story || !imageData) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const artwork = {
    id: nextId++,
    title,
    artist,
    year: parseInt(year),
    story,
    imageUrl: imageData
  };
  
  gallery.push(artwork);
  res.json(artwork);
});

// DELETE an artwork
app.delete('/api/artworks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  gallery = gallery.filter(art => art.id !== id);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Art Gallery server running on port ${PORT}`);
});
