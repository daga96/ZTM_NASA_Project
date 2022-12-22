const planetsModel = require("../models/planetsModel");

async function getAllPlanets(req, res) {
  return res.status(200).json(await planetsModel.getAllPlanets());
}

module.exports = {
  getAllPlanets,
};
