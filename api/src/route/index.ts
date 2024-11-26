import express, { Router } from "express";
import { userRouter } from "./user";

export const router: Router = express.Router();

router.use("/user", userRouter);

