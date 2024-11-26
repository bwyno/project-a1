import { Request, Response, NextFunction } from "express";

export const put = (req: Request, res: Response, next: NextFunction) => {
  res.json({ data: "data" });
};
