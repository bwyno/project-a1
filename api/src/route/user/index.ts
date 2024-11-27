import express, { Router } from "express";
import { getAll } from "../../controller/user/userGetAllController";
import { getOne } from "../../controller/user/userGetOneController";
import { put } from "../../controller/user/userPutController";
import { remove } from "../../controller/user/userDeleteController";
import { create } from "../../controller/user/userCreateController";
import { hashPassword } from "../../middleware/hashPassword";

export const userRouter: Router = express.Router();

userRouter.use(express.json());

userRouter.get("/", getAll);
userRouter.get("/:id", getOne);
userRouter.put("/:id", put);
userRouter.delete("/:id", remove);
userRouter.post("/", hashPassword,create);
