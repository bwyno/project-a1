import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { ErrorResponse } from "../../response/errorResponse";

export const authentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const jwtSecret = process.env.JWT_SECRET;
  if (req.headers.authorization && jwtSecret) {
    const token = req.headers.authorization?.slice(7);
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        const err = new ErrorResponse("401", "Unauthorized");
        res.status(401).json(err);
      } else {
        next();
      }
    });
  } else {
    const err = new ErrorResponse("500", "Internal Server Error");
    res.status(500).json(err);
  }
};
