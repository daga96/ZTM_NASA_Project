const express = require("express");
const router = express.Router();
const {
  getAllLaunches,
  addNewLaunch,
  abortLaunchMission,
} = require("../controllers/launchesController");
const { getAllPlanets } = require("../controllers/planetsController");

router.get("/launches", getAllLaunches);
router.get("/planets", getAllPlanets);
router.post("/launches", addNewLaunch);
router.delete("/launches/:id", abortLaunchMission);
module.exports = router;
