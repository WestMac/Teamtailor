const app = require("./app");
const { Logger } = require("./helpers/logger");
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  Logger.info(`Server stared on port: ${PORT}`);
});
