import { Request, Response, NextFunction } from "express";
import { prisma } from "../../prismaClient";
import { ErrorResponse } from "../../response/errorResponse";

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await prisma.user.findMany();
    res.json({ data: data });
  } catch (e) {
    const err = new ErrorResponse("500", "Internal Server Error");
    res.status(500).json(err);
  }
};
