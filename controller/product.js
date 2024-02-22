const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;

//CReate
exports.CreateModel = (req, res) => {
  const product = new Product(req.body);
  console.log(req.body);

  product
    .save()
    .then((savedProduct) => {
      res.status(201).json(savedProduct);
    })
    .catch((err) => {
      console.error("Error saving product:", err);
      res.status(500).json({ error: "Error saving product" });
    });
};

//Read
exports.getAllModels = (req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
      res.status(500).json({ error: "Error fetching products" });
    });
};

exports.getModelById = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};

exports.updateModel = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body);
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).send("Update failed");
  }
};

exports.updatePartialModel = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body);
    res.status(201).json(req.body);
  } catch (err) {
    console.log(err);
    res.status(400).send("Update failed");
  }
};

exports.deleteModel = async (req, res) => {
  const id = req.params.id;
  
  try {
    const doc = await Product.findOneAndDelete({ _id: id }, req.body);
    res.status(201).json({message : "Product is Deleted"});

  } catch (err) {
    console.log(err);
    res.status(400).send("Delete operation failed");
  }
};
