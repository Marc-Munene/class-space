import { Router } from "express";
import { login, signUp } from "../controllers/auth";

const authRouter = Router();

authRouter.post("/auth/login", login);

authRouter.post("auth/signup", signUp);

export { authRouter };
