const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Connect the mongodb
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successful!"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("backed connected");
});

app.listen(port, () => {
  console.log("Backend server is running!");
});
