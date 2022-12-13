const http = require("http");

const express = require("express");
const router = require("./routes/router");
const cors = require("cors");
const app = express();
const path = require("path");
const morgan = require("morgan");

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

async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
