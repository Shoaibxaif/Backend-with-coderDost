const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  price: { type: Number, min: [0, "wrong  price"] },
  discountPercentage: { type: Number, min: [0, "wrong min discount"], max: 50 },
  rating: { type: Number, min: [0, "wrong rating"], max: 5 },
  stock: { type: Number },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

exports.Product = mongoose.model("Product", ProductSchema);
