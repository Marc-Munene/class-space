import { Router } from "express";
import { currentUser, login, logout, signUp } from "../controllers/auth.js";
import { userAuthentication } from "../middleware/AuthMiddleware.js";

const authRouter = Router();

authRouter.post("/auth/signup", signUp);

authRouter.post("/auth/login", login);

authRouter.get("/auth/me", userAuthentication, currentUser);

authRouter.delete("/auth/logout", logout);

export { authRouter };
