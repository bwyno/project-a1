import express, { Router } from "express";
import { getAll } from "../../controller/user/userGetAllController";
import { getOne } from "../../controller/user/userGetOneController";
import { put } from "../../controller/user/userPutController";
import { remove } from "../../controller/user/userDeleteController";

export const userRouter: Router = express.Router();

userRouter.get("/", getAll);
userRouter.get("/:id", getOne);
userRouter.put("/:id", put);
userRouter.delete("/:id", remove);
