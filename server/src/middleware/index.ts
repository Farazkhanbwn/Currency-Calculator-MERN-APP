import { NextFunction, Request, Response } from "express";
export const checkNumberType = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("req.body : ", req.body);
  const { number1 = 0, number2 = 0 } = req.body;

  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return res
      .status(400)
      .json({ data: null, error: "Please enter values as numbers" });
  }
  return next();
};
