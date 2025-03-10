import { Router } from "express";
import authRouter from "./auth.routes";

const authRoutes = Router();

authRoutes.use("/auth", authRouter);

export default authRoutes;