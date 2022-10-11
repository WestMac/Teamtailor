const { Logger } = require("./logger");
const { tempCleaner } = require("./tempCleaner");

const CronJob = require("cron").CronJob;

module.exports.job = new CronJob(process.env.TASK_CLEANER, function () {
  const date = new Date();
  tempCleaner();
  Logger.info(`Scheluded task: Temp cleaner, Time: ${date}`);
});
