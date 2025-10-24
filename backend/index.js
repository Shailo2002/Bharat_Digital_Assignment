import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dataRouter from "./routes/data.route.js";
import connectDb from "./config/db.js";
import testRedisRouter from "./routes/testRedis.js";
import userRouter from "./routes/user.route.js";


dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);

const port = process.env.PORT || 3000;


app.use("/api/data", dataRouter);
app.use("/api/user", userRouter);
app.use("/redis", testRedisRouter);

app.listen(port, () => {
  connectDb();
  console.log(`Server listening on port ${port}`);
});
