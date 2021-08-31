const productCategoriesModel = require("../Models/productCategory");
const productModel = require("../Models/product");

module.exports = {
  addProductCategory: async (req, res, next) => {
    try {
      const { name } = req.body;
      const productCategory = new productCategoriesModel({
        name: name,
      });
      const saveProductCategory = await productCategory.save();
      res.send(saveProductCategory);
    } catch (err) {
      next(err);
    }
  },
  addProduct: async (req, res, next) => {
    try {
      const category = req.body.productCategory;
      const price = req.body.totalSalesPrice_usd;
      const product = new productModel({
        productCategory: category,
        totalSalesPrice_usd: price,
      });
      const saveProduct = await product.save();
      res.send(saveProduct);
    } catch (err) {
      next(err);
    }
  },
  getProductCategories: async (req, res, next) => {
    try {
      const categories = await productCategoriesModel.find();
      res.send(categories);
    } catch (err) {
      next(err);
    }
  },
  getProducts: async (req, res, next) => {
    try {
      const noOfProducts = req.params.noOfProducts;
      console.log(noOfProducts);
      const products = await productModel
        .find()
        .sort({ totalSalesPrice_usd: -1 })
        .limit(10);
      res.send(products);
    } catch (err) {
      next(err);
    }
  },
};
