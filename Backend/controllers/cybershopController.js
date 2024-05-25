import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import Product from "../models/product.js";
// Controller functions for cybershop actions

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email already in use");
      return res.status(409).send({ message: "Email already in use" });
    }
    // For user , role will be 'user'
    const hashedPassword = await bcrypt.hash(password, 10);
    const newuser = new User({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });
    await newuser.save();
    console.log("user user created successfully");
    res.status(201).send({ message: "user created successfully" });
  } catch (error) {
    console.error("Error creating user user:", error);
    res
      .status(500)
      .send({ message: "Error creating user user", error: error.toString() });
  }
};

export const login = async (req, res) => {
const { email, password } = req.body;
try {
  const user = await User.findOne({ email, role: "user" });
  if (!user) {
    console.log("user not found");
    return res.status(404).send({ message: "user not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    console.log("Invalid credentials");
    return res.status(400).send({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, "your-secret-key", {
    expiresIn: "1h",
  });
  res.status(200).send({ token });
} catch (error) {
  console.error("Error logging in user:", error);
  res
    .status(500)
    .send({ message: "Error logging in user", error: error.toString() });
}};
