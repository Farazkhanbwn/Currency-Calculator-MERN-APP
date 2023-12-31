import { Request, Response } from "express";
import User from "./calculator-model";

export const addHistory = async (req: Request, res: Response) => {
  try {
    const { history, uid } = req.body;
    const userHistory = new User({ history, uid: uid });

    await userHistory.save();
    return res.status(200).json({ error: null, data: userHistory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: null, error: "External Server Error" });
  }
};

export const getAllHistory = async (req: Request, res: Response) => {
  try {
    const { uid } = req.body;
    console.log("uid", uid);

    const user = await User.find({ uid }).lean();
    console.log(user);

    return res.status(200).json({ error: null, data: user });
  } catch (error) {
    res.status(500).json({ data: null, error: "External Server Error" });
  }
};

export const deleteHistoryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findOneAndDelete({ id });
    console.log(user);

    return res.status(200).json({ error: null, data: user });
  } catch (error) {
    res.status(500).json({ data: null, error: "External Server Error" });
  }
};
