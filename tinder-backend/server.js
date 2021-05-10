const express = require("express");
const mongoose = require("mongoose");

// App Config
const app = express();
const port = process.env.PORT || 3001;
const connection_url = `mongodb+srv://admin:3oKo7Fc3hFMmxLx7@cluster0.mpslv.mongodb.net/tinderdb?retryWrites=true&w=majority`;
// Middlewares

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("yooo it works!!");
});
// Listener
app.listen(port, () => console.log(`Listening on Port: ${port}`));
// 3oKo7Fc3hFMmxLx7
