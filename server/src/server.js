const http = require("http");

const express = require("express");
const router = require("./routes/router");
const cors = require("cors");
const app = express();
const { loadPlanetsData } = require("./models/planetsModel");

const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(router);

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
