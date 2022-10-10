const fs = require("fs");
const path = require("path");
const { Logger } = require("./logger");

const directoryPath = path.join(__dirname, "..", "temp");

const getFileNames = async () => {
  return await fs.promises.readdir(directoryPath, function (err, files) {
    if (err) {
      return Logger.error(`Unable to scan directory. Error: ${err}`);
    }
    return files;
  });
};

module.exports.tempCleaner = async () => {
  const fileNames = await getFileNames();
  fileNames.map(file => {
    const date = file.split("-")[1].split(".")[0];
    if (date < Date.now() - 1800000 && file) {
      Logger.info(`Removing temp file: ${file}`);
      return fs.unlink(path.join(__dirname, "..", "temp", file), err => console.log(err));
    }
    return file;
  });
};
