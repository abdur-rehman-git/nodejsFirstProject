const express = require('express');
const app = express();
const friendRoute = require('./routes/friendRoute');

const cors = require('cors');

app.use(cors());
app.options('*', cors());
app.use(express.json());

app.use("/api/v1/friends", friendRoute);

app.get("/", (req, res) => {
    res.status(200).send("Hello from server");
});

module.exports = app;
