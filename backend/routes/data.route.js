import express from "express";
import { getData } from "../controllers/data.controller.js";

const dataRouter = express.Router();

dataRouter.get("/", getData)

export default dataRouter;
