import expresse from "express";
import {} from "../controllers/users.js";

import {
  createFoodOrder,
  deleteFoodOrder,
  getFoodOrderById,
  getFoodOrders,
  getFoodOrdersByUserId,
  updateFoodOrder,
} from "../controllers/foodOrder.js";

export const foodOrdersRouter = expresse.Router();

foodOrdersRouter
  .post("/", createFoodOrder)
  .get("/", getFoodOrders)
  .get("/:id", getFoodOrderById)
  .delete("/:id", deleteFoodOrder)
  .get("/foodList/:id", getFoodOrdersByUserId)
  .put("/:id", updateFoodOrder);
