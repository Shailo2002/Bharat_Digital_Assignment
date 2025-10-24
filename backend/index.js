import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dataRouter from "./routes/data.route.js";
import connectDb from "./config/db.js";
import testRedisRouter from "./routes/testRedis.js";


dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;


app.use("/api/data", dataRouter);
app.use("/api/user", dataRouter);
app.use("/redis", testRedisRouter);

app.listen(port, () => {
  connectDb();
  console.log(`Server listening on port ${port}`);
});
