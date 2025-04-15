import expresse from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  userUpdate,
} from "../controllers/users.js";

export const usersRouter = expresse.Router();

usersRouter
  .get("/", getUsers)
  .get("/:id", getUserById)
  .post("/", createUser)
  .put("/", userUpdate)
  .delete("/", deleteUser);
