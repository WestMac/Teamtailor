const { Logger } = require("../helpers/logger");

module.exports.errorHandler = (error, request, response, next) => {
  Logger.warn(`error ${error.message}`);
  const status = error.status || 400;

  response.status(status).send(error.message);
};
