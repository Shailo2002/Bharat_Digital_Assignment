import express from "express";
import { getData } from "../controllers/data.controller.js";
import { backendCheck } from "../controllers/user.controller.js";

const dataRouter = express.Router();

// dataRouter.get("/", getData)
dataRouter.get("/check", backendCheck);

export default dataRouter;
