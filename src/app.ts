import express, { Application } from "express";
import cors from "cors";
import userRoutes from "./app/module/user/user.route";
import morgan from "morgan";
const app: Application = express();

// using cors
app.use(cors());

// parse  data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1/user", userRoutes);

export default app;
