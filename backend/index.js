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
    origin: ["http://localhost:5173", process.env.FRONTEND_URL, process.env.FRONTEND_URL2],
    credentials: true,
  })
);

const port = process.env.PORT || 3000;

app.use("/api/data", dataRouter);
app.use("/api/user", userRouter);
app.use("/redis", testRedisRouter);

app.listen(port, "0.0.0.0", () => {
  connectDb();
  console.log(`Server listening on port ${port}`);
});

