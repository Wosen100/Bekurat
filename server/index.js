const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("./models/User");

const serverApp = express();
serverApp.use(cors());

dotenv.config({ path: "./config/config.env" });
const connectDB = require("./config/db.js");

// load env variables

serverApp.use(express.json());

// connect database
connectDB();

serverApp.get("/", function (request, response) {
  response.send("hi, I am server");
});

serverApp.post("/api/auth/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User not found",
    });
  } else {
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    } else {
      const token = jwt.sign(
        { _id: user._id, email: user.email },
        "secret123"
      );
      return res.status(200).json({
        success: true,
        message: "Login successful",
        token,
      });
    }
  }
});

// register usser
serverApp.post("/api/auth/register", async (req, res) => {
  // hash password using bcrypt

  try {
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    } else {
      const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
      });

      if (newUser) {
        return res.status(201).json({
          success: true,
          data: newUser,
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "User is not created",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

serverApp.listen(5001, function () {
  console.log("server app is running at PORT: 5001");
});