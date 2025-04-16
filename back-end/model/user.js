import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  phoneNumber: String,
  address: String,
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
