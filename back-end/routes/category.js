import expresse from "express";

import {
  createCategory,
  deleteCategory,
  getCategory,
  getCategoryById,
  updateCategory,
} from "../controllers/category.js";

export const categoriesRouter = expresse.Router();

categoriesRouter
  .post("/", createCategory)
  .get("/", getCategory)
  .get("/:id", getCategoryById)
  .delete("/:id", deleteCategory)
  .put("/:id", updateCategory);
