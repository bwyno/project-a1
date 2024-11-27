import { Request, Response, NextFunction } from "express";
import { prisma } from "../../prismaClient";
import { ErrorResponse } from "../../response/errorResponse";

export const put = async (req: Request, res: Response, next: NextFunction) => {
  const userId = Number(req.params.id);
  if (isNaN(userId)) {
    const err = new ErrorResponse("400", "Invalid ID format");
    res.status(400).json(err);
  }
  try {
    const data = await prisma.user.update({
      where: {
        id: userId,
      },
      data: req.body,
    });
    res.json({ data: data });
  } catch (e) {
    const err = new ErrorResponse("500", "Internal Server Error");
    res.status(500).json(err);
  }
};
