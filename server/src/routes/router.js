const express = require("express");
const router = express.Router();
const { getAllLaunches } = require("../controllers/launchesController");
const { getAllPlanets } = require("../controllers/planetsController");

router.get("/launches", getAllLaunches);
router.get("/planets", getAllPlanets);
module.exports = router;
