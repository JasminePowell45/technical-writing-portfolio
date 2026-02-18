

const express = require('express');
const app = express();

app.use(express.json()); //allows JSON in requests

const PORT = 3000;

console.log("THIS IS THE ACTIVE SERVER FILE");

//root endpoint
app.get('/', (req, res) => {
    res.status(200).json({ message: "API running"});
});

//players endpoint
app.get('/players', (req, res) => {
    console.log("GET /players HIT");
    res.status(200).json([
        { id: 1, name: "John Doe", position: "Guard"},
        { id: 2, name: "Mike Smith", position: "Forward" }
    ]);
});
//POST a new player
app.post('/players', (req, res) => {
    console.log("POST /players HIT");
    res.status(201).json ({
        message: "POST works",
        body: req.body
    });
});
//start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
