const http = require("http");
const mongoose = require("mongoose");
const express = require("express");
const router = require("./routes/router");
const cors = require("cors");
const app = express();
const path = require("path");
const morgan = require("morgan");
const MONGO_URL = `mongodb+srv://xxdgmrxx:<password>@cluster0.xfv3nux.mongodb.net/?retryWrites=true&w=majority`;
const { loadPlanetsData } = require("./models/planetsModel");

const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(router);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

const server = http.createServer(app);

mongoose.connection.on("open", () => {
  console.log("MongoDB connection ready!");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();

module.exports = app;
