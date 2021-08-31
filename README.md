# api endpint:

- localhost:3000/api/add/product (post request) - add product
  {
  "productCategory":"612b8b75700a71634a7c9334",
  "totalSalesPrice_usd":50
  }

- localhost:3000/api/add/product-category (post request) - add product category
  {
  "name": "category name"
  }

- localhost:3000/api//get&length=:noOfProducts (get) -fetch top 10 product

(takeing no of product is just for for process. you will pass any number but you will get default top 10 list)

- localhost:3000/api/get/categories (get) - fetch categories
