import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../../response/errorResponse";

const saltRounds = 10;
export const hashPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await bcrypt
      .hash(req.body.password, saltRounds)
      .then((hash) => {
        req.body.password = hash;
      })
      .catch((err) => {
        console.error("Error hashing password:", err);
      });
    next();
  } catch (e) {
    const err = new ErrorResponse("500", "Internal Server Error");
    res.status(500).json(err);
  }
};
