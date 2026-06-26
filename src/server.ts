import { createApp } from "@/app.js";
import { config } from "@/core/config/index.js";

const app = createApp();

app.get("/", (req, res) => {
  res.send(`Welcome to ${config.APP_NAME} running in ${config.NODE_ENV} mode!`);
});

app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`);
});
