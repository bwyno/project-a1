import { Request, Response, NextFunction } from "express";
import { prisma, Prisma } from "../../prismaClient";
import { ErrorResponse } from "../../response/errorResponse";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    
    const data = await prisma.user.create({
      data: req.body,
    });
    

    res.json({ data: data });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      switch (e.code) {
        case "P2002":
          const error = new ErrorResponse(e.code, e.message);
          res.status(400).json(error);
      }
    }
  }
};
