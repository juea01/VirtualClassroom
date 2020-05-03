const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Henry - will redirect all the non-api routes to react frontend
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client','index.html'));
});

app.get("/", (req, res) => {
  res.send({ Project: "Virtual Classroom" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
