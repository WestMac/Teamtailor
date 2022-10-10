const { parse } = require("json2csv");
const fs = require("fs");
const { Logger } = require("./logger");

module.exports.saveCsv = data => {
  const filePath = `temp/candidates-${Date.now()}.csv`;
  try {
    fs.writeFileSync(filePath, parse(data));
    return filePath;
  } catch (err) {
    Logger.error(`Error while saving CSV file. Error: ${err}`);
  }
};
