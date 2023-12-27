import { Request, Response } from "express";
import {
  addTwoNumbers,
  divideTwoNumber,
  multipleTwoNumbers,
  subtractTwoNumbers,
} from "../utils";

export const add = async (req: Request, res: Response) => {
  try {
    const { number1, number2 } = req.body;

    const result = addTwoNumbers(number1, number2);
    return res.status(200).json({ error: null, data: result });
  } catch (error) {
    res.status(500).json({ data: null, error: "External Server Error" });
  }
};

export const subtract = async (req: Request, res: Response) => {
  try {
    const { number1, number2 } = req.body;

    const result = subtractTwoNumbers(number1, number2);
    return res.status(200).json({ error: null, data: result });
  } catch (error) {
    res.status(500).json({ data: null, error: "External Server Error" });
  }
};

export const multiply = async (req: Request, res: Response) => {
  try {
    const { number1, number2 } = req.body;

    const result = multipleTwoNumbers(number1, number2);
    return res.status(200).json({ error: null, data: result });
  } catch (error) {
    res.status(500).json({ data: null, error: "External Server Error" });
  }
};

export const divide = async (req: Request, res: Response) => {
  try {
    const { number1, number2 } = req.body;

    const result = divideTwoNumber(number1, number2);
    return res.status(200).json({ error: null, data: result });
  } catch (error) {
    res.status(500).json({ data: null, error: "External Server Error" });
  }
};
