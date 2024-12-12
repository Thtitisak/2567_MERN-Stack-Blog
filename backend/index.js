const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const userRouter = require("../backend/routers/user.routers");

const app = express();
const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
//Connect to Mongo DB
try {
  await mongoose.connect("DB_URL");
  console.log("Connect to Mongo DB Successfully");
} catch (error) {
  console.log("DB Connection Failed");
}

app.use(cors({ origin: BASE_URL, credentials: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>Welcome to SE Blog </h1>");
});

//use Routers
app.use("/api/v1/auth/register");

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
