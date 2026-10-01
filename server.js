require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const PORT = process.env.PORT || 5000;


connectDB();


app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Syntecxhub Product CRUD API is running",
  });
});


app.use("/api/products", productRoutes);


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});