const launches = new Map();

const launch = require("../schemas/launchesSchema");
let latestFlightNumber = 100;

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    launch.flightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ["ZZZ", "AAA"],
      flightNumber: latestFlightNumber,
    })
  );
}

function abortMissionById(launchId) {
  const aborted = launches.get(launchId);
  // aborted.upcoming = false;
  // aborted.success = false;
  return aborted;
}

module.exports = {
  abortMissionById,
  getAllLaunches,
  addNewLaunch,
};
