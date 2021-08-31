const express = require("express");
const createHttpError = require("http-errors");
require("dotenv").config();
require("./src/Config/Mongodb.config");

const dataRouter = require("./src/Routes/product.route");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res, next) => {
  res.send("hello boss");
});
app.use("/api", dataRouter);

app.use(async (req, res, next) => {
  next(createHttpError.NotFound("This route is not found!"));
});

app.use((err, req, res, next) => {
  res.send({
    error: {
      status: err.status || 500,
      message: err.message || "Internal Server Error!",
    },
  });
});

app.listen(PORT, () =>
  console.log(`Server started at: http://localhost:${PORT}`)
);
