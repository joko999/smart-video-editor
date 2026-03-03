const express = require('express');
const router = express.Router();

// Video processing endpoint
router.post('/process', (req, res) => {
    // Logic for video processing
    res.send('Video is being processed');
});

// Endpoint for getting video information
router.get('/info/:id', (req, res) => {
    const videoId = req.params.id;
    // Logic to retrieve video information
    res.send(`Information for video ID: ${videoId}`);
});

module.exports = router;