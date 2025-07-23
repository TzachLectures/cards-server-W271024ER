import express from "express";
import logger from "./middlewares/logger.js";
import router from "./router/router.js";
import cors from "cors";
const app = express(); //איתחול אפליקציית אקספרס חדשה
const port = 3000;

app.use(
  cors({
    origin: ["http://127.0.0.1:5500"],
  })
);

app.use(express.json());
app.use(logger);
app.use(router);

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log("server is listening to port " + port);
});
