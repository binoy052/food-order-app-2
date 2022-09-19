// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
const Meal = require("./models/meals.js");
const Order = require("./models/orders.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
// const dbUrl = "mongodb://localhost:27017/food-order";

mongoose.connect(process.env.DB_URl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const express = require("express");
const cors = require("cors");
process.setMaxListeners(0);
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/api/meals", async (req, res) => {
  const meals = await Meal.find({});

  res.status(200).json(meals);
});

app.post("/api/order", async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.status(200).json("success");
});

app.listen(8080, () => {
  console.log("Server started at port 8080");
});
