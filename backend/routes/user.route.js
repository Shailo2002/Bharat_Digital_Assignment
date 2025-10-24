import express from "express"

const userRouter = express.Router()

userRouter.get("/:district")

export default userRouter;