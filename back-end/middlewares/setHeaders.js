module.exports.setHeaders = (req, res, next) => {
  res.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
};
