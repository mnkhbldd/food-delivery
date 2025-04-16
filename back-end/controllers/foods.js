import { v4 as uuidv4 } from "uuid";
import FoodModel from "../model/food.js";

export const createFood = async (req, res) => {
  const { foodName, price, image, ingredients } = req.body;
  try {
    const food = await FoodModel.create({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
    });
    return res
      .status(200)
      .send({
        success: true,
        food: food,
      })
      .end();
  } catch (error) {
    console.error(error, err);
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getFoods = async (req, res) => {
  try {
    const foods = await FoodModel.find();
    return res
      .status(200)
      .send({
        success: true,
        foods: foods,
      })
      .end();
  } catch (error) {
    console.error(error, err);
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getFoodById = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await FoodModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        food: food,
      })
      .end();
  } catch (error) {
    console.error(error, err);
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await FoodModel.findByIdAndDelete(id);
    return res
      .status(200)
      .send({
        success: true,
        food: food,
      })
      .end();
  } catch (error) {
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await FoodModel.findByIdAndUpdate(id, req.body);
    return res.status(200).send({
      success: true,
      food: food,
    });
  } catch (error) {
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
