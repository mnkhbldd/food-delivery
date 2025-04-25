import FoodOrdersModel from "../model/foodOrder.js";

export const createFoodOrder = async (req, res) => {
  const { user, foods, totalPrice } = req.body;
  try {
    const foodOrder = await FoodOrdersModel.create({
      user: user,
      totalPrice: totalPrice,
      foodOrderItems: foods,
    });
    return res
      .status(200)
      .send({
        success: true,
        foodOrder: foodOrder,
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

export const getFoodOrders = async (req, res) => {
  try {
    const foodOrders = await FoodOrdersModel.find().populate("user").populate({
      path: "foodOrderItems.food",
    });
    return res
      .status(200)
      .send({
        success: true,
        foodOrders: foodOrders,
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

export const getFoodOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const foodOrder = await FoodOrdersModel.findById(id).populate("user");
    return res
      .status(200)
      .send({
        success: true,
        foodOrder: foodOrder,
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

export const deleteFoodOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const foodOrder = await FoodOrdersModel.findByIdAndDelete(id);
    return res
      .status(200)
      .send({
        success: true,
        foodOrder: foodOrder,
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

export const updateFoodOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const foodOrder = await FoodOrdersModel.findByIdAndUpdate(id, req.body);
    return res
      .status(200)
      .send({
        success: true,
        foodOrder: foodOrder,
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
