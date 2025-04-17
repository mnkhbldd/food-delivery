import express, { json } from "express";
import { usersRouter } from "./routes/users.js";
import cors from "cors";
import connectMongoDB from "./connectDb.js";
import { foodsRouter } from "./routes/foods.js";
import { categoriesRouter } from "./routes/category.js";

const app = express();
const port = 8000;

connectMongoDB();

app.use(cors());
app.use(json());
app.use("/user", usersRouter);
app.use("/food", foodsRouter);
app.use("/category", categoriesRouter);

app.listen(port, () => {
  console.log(`Server running at PORT: ${port}`);
});
