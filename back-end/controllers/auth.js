import UserModel from "../model/user.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    console.log(user);
    const pass = await bcrypt.compare(password, user.password);
    console.log(pass);
    if (pass) {
      return res.status(200).send({
        success: true,
        message: "success",
      });
    } else {
      return res.status(404).send({
        success: false,
        message: "Email or password wrong",
      });
    }
  } catch (error) {}
};
