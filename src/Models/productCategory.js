const mongoose = require("mongoose");
const productCategory = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductCategories = mongoose.model("productCategory", productCategory);

module.exports = ProductCategories;
