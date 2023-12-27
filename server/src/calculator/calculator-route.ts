import express, { Router } from "express";
import { checkNumberType } from "../middleware";
import { add, divide, multiply, subtract } from "./calculator-controller";

const calculateRoute: Router = express.Router();

calculateRoute.post("/add", checkNumberType, add);
calculateRoute.post("/subtract", checkNumberType, subtract);
calculateRoute.post("/multiply", checkNumberType, multiply);
calculateRoute.post("/divide", checkNumberType, divide);

export default calculateRoute;
