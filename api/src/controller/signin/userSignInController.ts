import { Request, Response, NextFunction } from "express";
import { prisma, Prisma } from "../../prismaClient";
import { ErrorResponse } from "../../response/errorResponse";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

const generateToken = async (data: any, secret: string) => {
  return jwt.sign(data, secret, { expiresIn: "1d" });
};

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const jwtSecret = process.env.JWT_SECRET;
  const data = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  if (data == null) {
    const error = new ErrorResponse("401", "Data not found. Unauthorized");
    res.status(401).json(error);
  } else {
    const authenticate = await bcrypt
      .compare(req.body.password, data.password)
      .then((result) => {
        return result;
      });
    if (authenticate && jwtSecret) {
      const generatedToken = await generateToken(data, jwtSecret);
      res.json({ generatedToken });
    } else {
      const error = new ErrorResponse(
        "401",
        "Incorrect password. Unauthorized"
      );
      res.status(401).json(error);
    }
  }
};
