import expresse from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

export const usersRouter = expresse.Router();

usersRouter
  .post("/", createUser)
  .get("/", getUsers)
  .get("/:id", getUserById)
  .delete("/:id", deleteUser)
  .put("/", verifyToken, updateUser);
