import { v4 as uuidv4 } from "uuid";
import FoodModel from "../model/food.js";
import categoryModel from "../model/category.js";

export const createFood = async (req, res) => {
  const { foodName, price, image, ingredients, category } = req.body;
  try {
    const food = await FoodModel.create({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
      category: category,
    });
    return res
      .status(200)
      .send({
        success: true,
        food: food,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
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
    const foods = await FoodModel.find().populate("category");
    return res
      .status(200)
      .send({
        success: true,
        foods: foods,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

// export const getFoodsByCategoryId = async (req, res) => {
//   const { categoryId } = req.params;
//   try {
//     const foods = await FoodModel.find({ category: categoryId }).populate(
//       "category"
//     );
//     return res
//       .status(200)
//       .send({
//         success: true,
//         foods: foods,
//       })
//       .end();
//   } catch (error) {
//     console.error(error, "err");
//     return res
//       .status(400)
//       .send({
//         success: false,
//         message: error,
//       })
//       .end();
//   }
// };

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
    console.error(error, "err");
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

export const getFoodsByCategoryId = async (req, res) => {
  try {
    const foods = await categoryModel.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "category",
          as: "foods",
        },
      },
      {
        $project: {
          categoryName: 1,
          foods: 1,
        },
      },
    ]);
    return res
      .status(200)
      .send({
        success: true,
        foods: foods,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
