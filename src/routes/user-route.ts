import { Router } from "express";
import {
  getProfile,
  getProfiles,
  login,
  register,
  updateUser,
} from "../controllers/user-controller";

const userRoute = Router();

userRoute
  .post("/register", register)
  .post("/login", login)
  .get("/profile", getProfile)
  .get("/profiles", getProfiles)
  .put("/profile/:id", updateUser);

export { userRoute };
