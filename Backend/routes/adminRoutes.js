import express from "express";
import {
signup,
login,
allProducts,
addProduct,
editProduct,
removeProduct,
uploadImage,
} from "../controllers/adminController.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.get("/allProducts", allProducts);
router.post("/addproduct", addProduct);
router.put("/editproduct/:id", editProduct);
router.post("/removeproduct", removeProduct);
router.post("/upload", uploadImage);

export default router;
