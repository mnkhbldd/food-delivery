export const createFoodOrder = async (req, res) => {
  const { userId, foods, totalPrice } = req.body;
  try {
    const foodOrder = await FoodOrdersModel.create({
      user: userId,
      totalPrice: totalPrice,
      foodOrderItems: foods,
    });
    return res.status(200).send({
      success: true,
      foodOrder: foodOrder,
    });
  } catch (error) {
    console.error(error, "err").end();
    return res.status(400).send({
      success: false,
      message: error,
    });
  }
};

export const getFoodOrders = async (req, res) => {
  try {
    const foodOrders = await FoodOrdersModel.find().populate("user");
    return res.status(200).send({
      success: true,
      foodOrders: foodOrders,
    });
  } catch (error) {
    console.error(error, "err").end();
    return res.status(400).send({
      success: false,
      message: error,
    });
  }
};

export const getFoodOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const foodOrder = await FoodOrdersModel.findById(id).populate("user");
    return res.status(200).send({
      success: true,
      foodOrder: foodOrder,
    });
  } catch (error) {
    console.error(error, "err").end();
    return res.status(400).send({
      success: false,
      message: error,
    });
  }
};

export const deleteFoodOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const foodOrder = await FoodOrdersModel.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      foodOrder: foodOrder,
    });
  } catch (error) {
    console.error(error, "err").end();
    return res.status(400).send({
      success: false,
      message: error,
    });
  }
};

export const updateFoodOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const foodOrder = await FoodOrdersModel.findByIdAndUpdate(id, req.body);
    return res.status(200).send({
      success: true,
      foodOrder: foodOrder,
    });
  } catch (error) {
    console.error(error, "err").end();
    return res.status(400).send({
      success: false,
      message: error,
    });
  }
};
