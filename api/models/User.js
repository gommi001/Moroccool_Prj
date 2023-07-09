import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      city: {
        type: String,
      },
      phone: {
        type: String,
        //required: true,
      },
      img: {
        type: String,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        default: "user",
      },
      isAdmin: {
        type: Boolean,
        default: false
      },
    },
        {timestamps : true}
);

export default mongoose.model("User", userSchema);