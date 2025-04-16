import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const FoodModel = mongoose.model("Food", foodSchema);

export default FoodModel;
