import dotenv from "dotenv";
import express, { Application } from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import calculateRoute from "./calculator/calculator-route";

const app: Application = express();

// config
dotenv.config();

const PORT = process.env.PORT || 3000;

// middleware
app.use(morgan("tiny"));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));

app.use("/calculate", calculateRoute);

const initializeApp = async () => {
  await mongoose.connect(process.env.MONGODB_URI ?? "");

  app.listen(PORT, () => {
    console.log(`${PORT} port is running`);
  });
};

initializeApp();
