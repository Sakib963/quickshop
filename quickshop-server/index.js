const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connection = require("./connection");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("QuickShop API is running.");
});

// Create A Product
app.post("/products", (req, res) => {
  const product = req.body;
  const newProduct = [
    product.name,
    product.image,
    product.price,
    product.unitInStock,
    product.supplier,
    product.category,
    product.description,
  ];

  connection.query(
    "INSERT INTO product(name, image, price, unitInStock, supplier, category, description) values(?)",
    [newProduct],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});

// Get All Products
app.get("/products", (req, res) => {
  connection.query("SELECT * FROM product", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

// Get A Product
app.get("/products/:id", (req, res) => {
  connection.query(
    "SELECT * FROM product WHERE id=?",
    [req.params.id],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});

// Delete A Product
app.delete("/products/:id", (req, res) => {
  connection.query(
    "DELETE FROM product WHERE id=?",
    [req.params.id],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});

// Update A Product
app.patch("/products/:id", (req, res) => {
  const product = req.body;
  
  connection.query(
    "UPDATE product SET ? WHERE id = ?",
    [product, parseInt(req.params.id)],
    (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating product");
      } else {
        res.send(rows);
      }
    }
  );
});

// Get All Suppliers
app.get("/suppliers", (req, res) => {
  connection.query("SELECT * FROM supplier", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

// Get All Category
app.get("/category", (req, res) => {
  connection.query("SELECT * FROM category", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`QuickShop API is running on port: ${port}`);
});
