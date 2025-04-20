import mongoose, { now, Schema } from "mongoose";

const foodOrderItem = new mongoose.Schema({
  food: { type: Schema.Types.ObjectId, ref: "Food" },
  quantity: {
    type: Number,
    required: true,
  },
});

const foodOrderSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  totalPrice: {
    type: Number,
    required: true,
  },
  foodOrderItems: [foodOrderItem],
  status: {
    type: String,
    enum: ["Pending", "Canceled", "Delivered"],
    default: "Pending",
    required: true,
  },

  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

const FoodOrdersModel = mongoose.model("FoodOrder", foodOrderSchema);

export default FoodOrdersModel;
