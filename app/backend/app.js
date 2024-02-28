const logger = require("./utilities/logger");
const Koa = require("koa");
const app = new Koa();
const port = process.env.BACKEND_PORT || 3000;

require("./startup/error-handling")(app);
require("./startup/routes")(app);

app.listen(port, () => logger.info(`Connected on port ${port}`));
