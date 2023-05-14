const {
  getAllLaunches,
  addNewLaunch,
  existWithLaunchId,
  abortLaunchById,
} = require("../../models/launches.models");
//get launches api
function httpgetAllLaunches(req, res) {
  res.status(200).json(getAllLaunches());
}
//submit new launch api
function httpAddNewLaunch(req, res) {
  const launch = req.body;

  launch.launchDate = new Date(launch.launchDate);

  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid launch Date, please fill proper Date",
    });
  }

  addNewLaunch(launch);
  return res.status(201).json(launch);
}
function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);
  console.log(launchId);
  if (!existWithLaunchId(launchId)) {
    return res.status(404).json({
      err: "Launch Not Found",
    });
  }
  const aborted = abortLaunchById(launchId);
  return res.status(200).json(aborted);
}
module.exports = {
  httpgetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
};
