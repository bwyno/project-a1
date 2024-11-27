import { Request, Response, NextFunction } from "express";
import { prisma } from "../../prismaClient";

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await prisma.user.findMany();
    res.json({ data: data });
  } catch (e) {
    console.log(e)
  }
};
