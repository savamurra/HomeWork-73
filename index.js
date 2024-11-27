const express = require('express');

const app = express();
const port = 8000;

const password = 'madrid';

app.get('/:text', (req, res) => {
    res.send(req.params.text);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.get('/encode/:text', (req, res) => {
    const encodeText = req.params.text;
})