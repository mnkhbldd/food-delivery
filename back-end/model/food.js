import mongoose, { Schema } from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const FoodModel = mongoose.model("Food", foodSchema);

export default FoodModel;
