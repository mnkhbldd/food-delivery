import expresse, { Router } from "express";
import {} from "../controllers/users.js";
import { login } from "../controllers/auth.js";

export const authRouter = Router();

authRouter.post("/", login);
