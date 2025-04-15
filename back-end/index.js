import express, { json } from "express";

const app = express();
const port = 8000;

app.use(json());

app.listen(port, () => {
  console.log(`Server running at PORT: ${port}`);
});
