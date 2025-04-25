import { v4 as uuidv4 } from "uuid";
import FoodModel from "../model/food.js";
import categoryModel from "../model/category.js";

export const createCategory = async (req, res) => {
  const { categoryName } = req.body;
  if (!categoryName) {
    return res
      .status(400)
      .send({
        success: false,
        message: "Category name is required",
      })
      .end();
  }
  try {
    const category = await categoryModel.create({
      categoryName,
    });
    return res
      .status(201)
      .send({
        success: true,
        category,
      })
      .end();
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .send({
        success: false,
        message: error.message,
      })
      .end();
  }
};

export const getCategory = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    return res
      .status(200)
      .send({
        success: true,
        categories,
      })
      .end();
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .send({
        success: false,
        message: error.message,
      })
      .end();
  }
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(400)
      .send({
        success: false,
        message: "Category ID is required",
      })
      .end();
  }
  try {
    const category = await categoryModel.findById(id);
    if (!category) {
      return res
        .status(404)
        .send({
          success: false,
          message: "Category not found",
        })
        .end();
    }
    return res
      .status(200)
      .send({
        success: true,
        category,
      })
      .end();
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .send({
        success: false,
        message: error.message,
      })
      .end();
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(400)
      .send({
        success: false,
        message: "Category ID is required",
      })
      .end();
  }
  try {
    const category = await categoryModel.findByIdAndDelete(id);
    if (!category) {
      return res
        .status(404)
        .send({
          success: false,
          message: "Category not found",
        })
        .end();
    }
    return res
      .status(200)
      .send({
        success: true,
        category,
      })
      .end();
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .send({
        success: false,
        message: error.message,
      })
      .end();
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(400)
      .send({
        success: false,
        message: "Category ID is required",
      })
      .end();
  }
  try {
    const category = await categoryModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!category) {
      return res
        .status(404)
        .send({
          success: false,
          message: "Category not found",
        })
        .end();
    }
    return res
      .status(200)
      .send({
        success: true,
        category,
      })
      .end();
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .send({
        success: false,
        message: error.message,
      })
      .end();
  }
};
