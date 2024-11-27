import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { ErrorResponse } from "../../response/errorResponse";

export const authentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization?.slice(7);
    jwt.verify(token, "asdadasdd", (err, decoded) => {
      if (err) {
        const err = new ErrorResponse("401", "Unauthorized");
        res.status(401).json(err);
      } else {
        next();
      }
    });
  }
};
