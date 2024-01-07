const express = require('express');
const app = express();
const path = require('path');

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'lol.html');
    res.sendFile(filePath);
});


const PORT = 8080; // You can choose any available port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
