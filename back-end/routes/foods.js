import expresse from "express";
import {} from "../controllers/users.js";
import {
  createFood,
  deleteFood,
  getFoodById,
  getFoods,
  getFoodsByCategoryId,
  updateFood,
} from "../controllers/foods.js";
import { verifyToken } from "../middleware/auth.js";

export const foodsRouter = expresse.Router();

foodsRouter
  .post("/", createFood)
  .get("/", getFoods)
  .get("/:categoryId", getFoodsByCategoryId)
  .get("/:id", getFoodById)
  .delete("/:id", deleteFood)
  .put("/:id", updateFood);
