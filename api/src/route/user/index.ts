import express, { Router } from "express";
import { getAll } from "../../controller/user/userGetAllController";

export const userRouter: Router = express.Router();

userRouter.get("/", getAll);
