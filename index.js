const express = require("express");

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Testing app for implementation of Ci/Cd pipeline using github actions");
})

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})