import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import config from "../config.js";

export const test = (req, res) => {
  res.json({
    message: "Api route is working!",
  });
};

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    // Validate password complexity
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-_=+])[a-zA-Z0-9!@#$%^&*()-_=+]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ error: 'Password must contain at least one uppercase letter, one number, one special character, and be at least 8 characters long' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser  = new User({ email, password: hashedPassword });
    await newUser .save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }
    const token = jwt.sign({ email: user.email }, config.secretKey, {
      expiresIn: config.jwtExpiration,
    });
    // Set the JWT token in a cookie with expiration time
    res.cookie("jwt_access_token", token, {
      httpOnly: true,
      expiresIn: new Date(Date.now() + config.jwtExpiration),
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    // You may implement logout logic here if needed
    res.clearCookie("jwt_access_token");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default { register, login, logout };
