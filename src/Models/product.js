const mongoose = require("mongoose");
const product = new mongoose.Schema(
  {
    productCategory: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    totalSalesPrice_usd: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("products", product);

module.exports = Products;
