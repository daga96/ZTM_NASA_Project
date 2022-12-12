const http = require("http");

const express = require("express");
const router = require("./routes/router");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(router);
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
