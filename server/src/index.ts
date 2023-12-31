import dotenv from "dotenv";
import express, { Application } from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import calculateRoute from "./calculator/calculator-route";
import cors from "cors";

const app: Application = express();

// config
dotenv.config();

const PORT = process.env.PORT || 3000;

// middleware
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/calculator", calculateRoute);

const initializeApp = async () => {
    await mongoose.connect(process.env.MONGODB_URI ?? "");
    console.log("connected to MONGO");

    app.listen(PORT, () => {
        console.log(`${PORT} port is running`);
    });
};

initializeApp();
