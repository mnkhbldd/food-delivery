import expresse from "express";
import {} from "../controllers/users.js";
import {
  createFood,
  deleteFood,
  getFoodById,
  getFoods,
  updateFood,
} from "../controllers/foods.js";

export const foodsRouter = expresse.Router();

foodsRouter
  .post("/", createFood)
  .get("/", getFoods)
  .get("/:id", getFoodById)
  .delete("/:id", deleteFood)
  .put("/:id", updateFood);
