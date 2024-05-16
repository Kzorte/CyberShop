// Import dependencies
import express, { json } from 'express';
import mongoose from 'mongoose'; // Import mongoose module

import { connect, model, Schema } from 'mongoose';
import { hash, compare } from 'bcrypt';
import cors from 'cors';
import multer from "multer";
import path from "path";


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
//const { error } = require("console");

// Inisialisasi app Express
const app = express();

// Middleware
app.use(json()); // untuk parsing application/json
app.use(cors()); // Mengaktifkan semua CORS request

// Koneksi ke MongoDB
mongoose.connect('mongodb+srv://cybershop:cybershop@cluster0.2i9vhga.mongodb.net/e-commerce', {
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

/// Image Storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating Upload Endpoint For images
app.use(`/images`, express.static(`upload/images`));

app.post("/api/upload", upload.single("product"), (req, res) => {
try {
  if (!req.file) {
    // Jika tidak ada file yang diunggah
    return res.status(400).json({ success: 0, error: "No file uploaded" });
  }

  // Jika file berhasil diunggah, kirim tanggapan sukses bersama dengan URL gambar
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
} catch (error) {
  // Tangani error yang terjadi saat mengunggah file
  console.error("Error uploading file:", error);
  res.status(500).json({ success: 0, error: "Failed to upload file" });
}
});

// Schema for Creating Products
const Product = mongoose.model("Product", {
  // id: {
  //   type: Number,
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  // new_price: {
  //     type: Number,
  //     required: true,
  // },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/api/addproduct", async (req, res) => {
  try {
    let Products = await Product.find({});
    let id;
    if (Products.length > 0) {
      let last_product_array = Products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }
    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      // new_price: req.body.new_price,
      old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ success: false, error: "Failed to save product" });
  }
});

// Edit Product
app.put("/editproduct/:id", async (req, res) => {
  try {
    const productId = req.params.id; // Ambil ID produk dari URL

    if (mongoose.Types.ObjectId.isValid(productId)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid product ID" });
    }

    const { name, image, category, old_price } = req.body;

    const updatedProduct = await Product.findOneAndUpdate(
      { id: productId },
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
    res.status(500).json({ success: false, error: "Failed to update product" });
  }
});

//Creating API For deleting Products
app.post(`/removeproduct`, async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});

// Create API For getting All Product
app.get("/allproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, error: "Failed to fetch products" });
  }
});


// Membuat model user
const User = model('User', new Schema({
  username: String,
  email: String,
  password: String,
}));

// Endpoint untuk signup
app.post('/api/signup', async (req, res) => {
  console.log('Attempting to handle POST request on /api/signup');
  try {
    const hashedPassword = await hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error creating user", error });
  }
});

// Endpoint untuk login
app.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user && compare(req.body.password, user.password)) {
    res.send({ message: "Login successful" });
  } else {
    res.status(400).send({ message: "Login failed" });
  }
});

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Admin Server running on port ${PORT}`);
});
