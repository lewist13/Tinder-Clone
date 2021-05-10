const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Cards = require("./schemas/dbCards");

// App Config
const app = express();
const port = process.env.PORT || 3001;
const connection_url = `mongodb+srv://admin:3oKo7Fc3hFMmxLx7@cluster0.mpslv.mongodb.net/tinderdb?retryWrites=true&w=majority`;
// Middlewares
app.use(express.json());
app.use(cors());
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

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
// Listener
app.listen(port, () => console.log(`Listening on Port: ${port}`));
// 3oKo7Fc3hFMmxLx7
