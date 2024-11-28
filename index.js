const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;

const password = 'madrid';

app.get('/:text', (req, res) => {
    return res.send(`<h1>${req.params.text}</h1>`);
});

app.get('/encode/:text', (req, res) => {
    const encodeText = req.params.text;
    const decodeText = Vigenere.Decipher(password).crypt(encodeText);
    return res.send(`<h1>${decodeText}</h1>`);
});

app.get('/decode/:text', (req, res) => {
    const decodeText = req.params.text;
    const encodeText = Vigenere.Cipher(password).crypt(decodeText);

    return res.send(`<h1>${encodeText}</h1>`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});