import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dataRouter from "./routes/data.route.js";
import connectDb from "./config/db.js";
import testRedisRouter from "./routes/testRedis.js";
import userRouter from "./routes/user.route.js";
import "./cronJobs/dailySync.js";


dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", process.env.FRONTEND_URL],
    credentials: true,
  })
);

const port = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.status(200).send("Healthy");
});
app.get("/", (req, res) => {
  res.status(200).send("OK from root");
});
app.use("/api/data", dataRouter);
app.use("/api/user", userRouter);
app.use("/redis", testRedisRouter);

app.listen(port, "0.0.0.0", () => {
  connectDb();
  console.log(`Server listening on port ${port}`);
});

