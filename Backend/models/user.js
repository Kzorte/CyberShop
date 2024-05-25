import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String, 
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
