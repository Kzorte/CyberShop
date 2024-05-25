import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import User from "../models/user.js";
import Product from "../models/product.js";
import mongoose from "mongoose";


/// Image Storage 
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// ==========SIGNUP==========
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email already in use");
      return res.status(409).send({ message: "Email already in use" });
    }
    // For admin user, role will be 'admin'
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new User({
      username,
      email,
      password: hashedPassword,
      role: "admin",
    });
    await newAdmin.save();
    console.log("Admin user created successfully");
    res.status(201).send({ message: "Admin user created successfully" });
  } catch (error) {
    console.error("Error creating admin user:", error);
    res
      .status(500)
      .send({ message: "Error creating admin user", error: error.toString() });
  }};


// ==========login==========
export const login = async (req, res) => {
const { email, password } = req.body;
try {
  const admin = await User.findOne({ email, role: "admin" });
  if (!admin) {
    console.log("Admin not found");
    return res.status(404).send({ message: "Admin not found" });
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    console.log("Invalid credentials");
    return res.status(400).send({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: admin._id }, "your-secret-key", {
    expiresIn: "1h",
  });
  res.status(200).send({ token });
} catch (error) {
  console.error("Error logging in admin:", error);
  res
    .status(500)
    .send({ message: "Error logging in admin", error: error.toString() });
}};

// ==========addProduct==========
export const addProduct = async (req, res) => {
try {
  const { name, image, category, old_price } = req.body;

  const newProduct = new Product({
    name,
    image,
    category,
    old_price,
  });

  await newProduct.save();
  res.status(201).json({ success: true, product: newProduct });
} catch (error) {
  console.error("Error adding product:", error);
  res.status(500).json({ success: false, error: "Failed to add product" });
}
};

export const allProducts = async(req, res) => {
    try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res
      .status(500)
      .json({
        success: false,
        id: product._id,
        error: "Failed to fetch products",
      });
  }
}
// ==========editProduct==========
export const editProduct = async (req, res) => {
  try {
    const productId = req.params.id; // Ambil ID produk dari URL

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid product ID" });
    }

    const { name, image, category, old_price } = req.body;

    const updatedProduct = await Product.findOneAndUpdate(
       { _id: productId },
      { name, image, category, old_price },
      { new: true }
    );

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }

    res.status(200).json({ success: true, product: updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error);
        console.error(error.message); 

    res.status(500).json({ success: false, error: "Failed to update product" });
  }
};

// ==========removeProduct==========
export const removeProduct = async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({
    success: true,
    name: req.body.name,
  });
};

// ==========uploadImage==========
export const uploadImage = async (req, res) => {
  upload.single("product")(req, res, (error) => {
    if (error) {
      console.error("Error uploading file:", error);
      return res
        .status(500)
        .json({ success: false, error: "Failed to upload file" });
    }

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, error: "No file uploaded" });
    }

    res.status(200).json({
      success: true,
      image_url: `http://localhost:${3000}/upload/images/${
        req.file.filename
      }`,
    });
  });
};
