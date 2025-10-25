import express from "express"
import { getDistricData } from "../controllers/user.controller.js";

const userRouter = express.Router()

userRouter.get("/:state/:district/:year", getDistricData);

export default userRouter;