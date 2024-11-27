import express, { Router } from "express";
import { userRouter } from "./user";
import { authentication } from "../middleware/authentication";
import { signIn } from "../controller/signin/userSignInController";

export const router: Router = express.Router();

router.use(express.json())
router.use("/users", authentication, userRouter);
router.use("/signin",signIn)

