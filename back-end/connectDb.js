import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();
const uri = process.env.MONGO_URI;
const connectMongoDB = async () => {
  try {
    await connect(uri);
    console.log("connected to database");
  } catch (error) {
    console.log(error, "err");
  }
};

export default connectMongoDB;
