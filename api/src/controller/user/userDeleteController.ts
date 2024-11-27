import { ErrorResponse } from "../../response/errorResponse";
import { prisma } from "../../prismaClient";
import { Request, Response, NextFunction } from "express";

export const remove = async (
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
    const deleteUser = await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    console.log(deleteUser)
    res.status(204).json();
  } catch (error) {
    const err = new ErrorResponse("500", "Internal Server Error");
    res.status(500).json(err);
  }
};
