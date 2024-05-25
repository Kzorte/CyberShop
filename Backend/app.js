import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes.js";
import cybershopRoutes from "./routes/cybershopRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://cybershop:cybershop@cluster0.2i9vhga.mongodb.net/e-commerce",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/admin", adminRoutes);
app.use("/cybershop", cybershopRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
