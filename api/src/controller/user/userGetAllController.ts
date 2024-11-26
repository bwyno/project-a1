import { Request, Response, NextFunction } from "express";

export const getAll = (req: Request, res: Response, next: NextFunction) => {
  res.json({ data: "data" });
};
