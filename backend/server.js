const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Smart Video Editor API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
