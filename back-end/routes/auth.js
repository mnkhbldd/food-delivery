import expresse, { Router } from "express";
import {} from "../controllers/users.js";
import { login, sendMail } from "../controllers/auth.js";

export const authRouter = Router();

authRouter.post("/", login).get("/mail", sendMail);
