import { Request, Response, NextFunction } from "express";

export const getOne = (req: Request, res: Response, next: NextFunction) => {
  res.json({ data: "data" });
};
