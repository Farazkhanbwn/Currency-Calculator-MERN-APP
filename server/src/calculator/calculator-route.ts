import express, { Router } from "express";
import { checkNumberType } from "../middleware";
import {
  addHistory,
  deleteHistoryItem,
  getAllHistory,
} from "./calculator-controller";

const calculateRoute: Router = express.Router();

calculateRoute.post("/addHistory", addHistory);
calculateRoute.post("/getAllHistory", getAllHistory);
calculateRoute.post("/deleteHistoryItem/:id", deleteHistoryItem);

export default calculateRoute;
