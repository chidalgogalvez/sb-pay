import mongoose from "mongoose";

export const User = mongoose.model("User", {
  name: String,
  lastName: String,
  address: String,
  phone: String,
  country: String,
});
