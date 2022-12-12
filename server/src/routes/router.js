const express = require("express");
const { httpGetAllPlanets } = require("../controllers/planetsController");
const router = express.Router();

router.get("/planets", httpGetAllPlanets);

module.exports = router;
