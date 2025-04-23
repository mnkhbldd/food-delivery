import { v4 as uuidv4 } from "uuid";
import UserModel from "../model/user.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { email, password, phoneNumber, address, isVerified } = req.body;
  const hashedpassword = await bcrypt.hash(password, 10);
  console.log(hashedpassword);
  try {
    const oldUser = await UserModel.find({ email: email });
    if (oldUser.length > 0) {
      return res
        .status(405)
        .send({ success: false, message: "user already exist" })
        .end();
    }

    const user = await UserModel.create({
      email: email,
      password: hashedpassword,
      phoneNumber: phoneNumber,
      address: address,
      isVerified: isVerified,
    });
    return res
      .status(200)
      .send({
        success: true,
        user: user,
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

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find().select("-password");
    return res
      .status(200)
      .send({
        success: true,
        users: users,
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

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        user: user,
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

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);
    return res
      .status(200)
      .send({
        success: true,
        user: user,
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

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, req.body);
    return res.status(200).send({
      success: true,
      user: user,
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
