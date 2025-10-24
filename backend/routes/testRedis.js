import express from "express";
import { redisClient } from "../config/redisClient.js";

const testRedisRouter = express.Router();

testRedisRouter.get("/set", async (req, res) => {
  await redisClient.set("hello", "world");
  res.send("Key saved");
});

testRedisRouter.get("/get", async (req, res) => {
  const value = await redisClient.get("hello");
  res.send(`Value: ${value}`);
});

testRedisRouter.get("/delete", async (req, res) => {
  await redisClient.del("hello");
  res.send("Key deleted");
});

export default testRedisRouter;
