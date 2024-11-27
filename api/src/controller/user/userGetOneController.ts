import { ErrorResponse } from "../../response/errorResponse";
import { prisma } from "../../prismaClient";
import { Request, Response, NextFunction } from "express";

export const getOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = Number(req.params.id);
  if (isNaN(userId)) {
    const err = new ErrorResponse("400", "Invalid ID format");
    res.status(400).json(err);
  }
  try {
    const data = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (data) {
      res.json({ data });
    } else {
      const err = new ErrorResponse("404", "User not found");
      res.status(404).json(err);
    }
  } catch (error) {
    const err = new ErrorResponse("500", "Internal Server Error");
    res.status(500).json(err);
  }
};
