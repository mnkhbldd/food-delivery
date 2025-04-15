import { v4 as uuidv4 } from "uuid";

const users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const userUpdate = (req, res) => {
  const { email } = req.body;
  users.map((user) => {
    if (user.email === email) {
      user.password = password;
      user.confirmpassword = confirmpassword;
    }
  });

  res.send({
    success: true,
    message: "user info is updated",
  });
};

export const createUser = (req, res) => {
  const { email, password, confirmpassword } = req.body;

  const duplicated = users.find((user) => user.email == email);

  if (duplicated) {
    return res
      .status(409)
      .json({
        success: false,
        message: "User already exists",
      })
      .end();
  }
  users.puish({ email, password, confirmpassword, id: uuidv4() });
  res.send({ success: true, message: "User created successfully" });
};

//admin apis

export const deleteUser = (req, res) => {
  const { id } = req.body;
  users = users.filter((user) => user.id !== id);
  res.send({
    success: true,
    message: "User is deleted",
  });
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => {
    return user.id === id;
  });
  res.send(user);
};
