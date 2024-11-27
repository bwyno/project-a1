import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";

const saltRounds = 10;
export const hashPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await bcrypt
    .hash(req.body.password, saltRounds)
    .then((hash) => {
      req.body.password = hash;
    })
    .catch((err) => {
      console.error("Error hashing password:", err);
    });
  next();
};
