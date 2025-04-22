import mongoose, { now, Schema } from "mongoose";

const foodOrderItem = new mongoose.Schema(
  {
    food: { type: Schema.Types.ObjectId, ref: "Food" },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const foodOrderSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    totalPrice: {
      type: Number,
      required: true,
    },
    foodOrderItems: { type: [foodOrderItem], required: true },
    status: {
      type: String,
      enum: ["Pending", "Canceled", "Delivered"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const FoodOrdersModel = mongoose.model("FoodOrder", foodOrderSchema);

export default FoodOrdersModel;
