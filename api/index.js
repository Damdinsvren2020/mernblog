import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Mongo db connection");
  })
  .catch((err) => {
    console.log();
  });
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
