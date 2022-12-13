const launchesModel = require("../models/launchesModel");

function getAllLaunches(req, res) {
  return res.status(200).json(launchesModel.getAllLaunches());
}

function addNewLaunch(req, res) {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch.target ||
    !launch.rocket ||
    !launch.launchDate
  ) {
    return res.status(400).json({
      error: "Missing Property",
    });
  }

  //   const launchDate = new Date(launch.launchDate);
  //   if (isNaN(launchDate.toString())) {
  //     return res.status(400).json({
  //       error: "Wrong Date Format",
  //     });
  //   }
  return res.status(201).json(launchesModel.addNewLaunch(launch));
}

function abortLaunchMission(req, res) {
  const launchId = Number(req.params.id);

  const aborted = launchesModel.abortMissionById(launchId);
  return res.status(200).json(aborted);
}
module.exports = {
  getAllLaunches,
  addNewLaunch,
  abortLaunchMission,
};
