import mongoose, { now, Schema } from "mongoose";

const foodOrderSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  totalPrice: {
    type: Number,
    required: true,
  },
  foodOrderItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "Notyet",
    },
  ],
  status: {
    type: String,
    enum: ["Pending", "Canceled", "Delivered"],
    default: "Pending",
    required: true,
  },

  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

const FoodOrderModel = mongoose.model("FoodOrder", foodOrderSchema);

export default FoodOrderModel;
