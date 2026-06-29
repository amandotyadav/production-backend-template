import { createApp } from "@/app.js";
import { config } from "@/core/config/index.js";

import { logger } from "@/core/logger/index.js";

const app = createApp();

app.get("/", (req, res) => {
  res.send(`Welcome to ${config.APP_NAME} running in ${config.NODE_ENV} mode!`);
});

app.listen(config.PORT, () => {
  logger.info(
    {
      port: config.PORT,
      environment: config.NODE_ENV,
    },
    `Server is running on http://localhost:${config.PORT}`,
  );
});
