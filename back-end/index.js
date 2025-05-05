import express, { json } from "express";
import { usersRouter } from "./routes/users.js";
import cors from "cors";
import connectMongoDB from "./connectDb.js";
import { foodsRouter } from "./routes/foods.js";
import { categoriesRouter } from "./routes/category.js";
import { foodOrdersRouter } from "./routes/foodOrder.js";
import { authRouter } from "./routes/auth.js";

const app = express();
const port = process.env.PORT;

connectMongoDB();

app.use(cors());
app.use(json());
app.use("/user", usersRouter);
app.use("/food", foodsRouter);
app.use("/category", categoriesRouter);
app.use("/foodOrder", foodOrdersRouter);
app.use("/login", authRouter);

app.listen(port, () => {
  console.log(`Server running at PORT: ${port}`);
});
