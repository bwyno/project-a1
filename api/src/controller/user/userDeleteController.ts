import { Request, Response, NextFunction } from "express";

export const remove = (req: Request, res: Response, next: NextFunction) => {
  res.json({ data: "data" });
};
