const morgan = require("morgan");
const { Logger } = require("../helpers/logger");

const stream = {
  write: message => Logger.http(message),
};

module.exports.morganMiddleware = morgan(":method :url :status :res[content-length] - :response-time ms", { stream });
