const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("backed connected");
});

app.listen(port, () => {
  console.log("Backend server is running!");
});
