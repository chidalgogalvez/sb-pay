import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: 'string',
  lastName: 'string',
  address: 'string',
  phone: 'string',
  country: 'string',
});

export const User = mongoose.model("User", schema);
