const { getAllPlaneets } = require("../../models/planets.models");

const httpgetAllPlanets = (req, res) => {
  return res.status(200).json(getAllPlaneets());
};

module.exports = { httpgetAllPlanets };
