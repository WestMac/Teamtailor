require("dotenv").config();
const express = require("express");
const { job } = require("./helpers/taskScheduler");
const { morganMiddleware } = require("./middlewares/morganMiddleware");
const indexRoutes = require("./routes/candidates");

const app = express();
job.start();
app.use(morganMiddleware);
app.get("/download", function (req, res) {
  const file = `${__dirname}/file.txt`;
  res.set("Access-Control-Expose-Headers", "Content-Disposition");
  res.download(file, "ee.txt");
});
app.use("/candidates", indexRoutes);

module.exports = app;
