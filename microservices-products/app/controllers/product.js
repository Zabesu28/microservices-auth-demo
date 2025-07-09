const Product = require("../models/product.js");

exports.create = async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = new Product({
      name,
      price,
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(err.status || 500).json({
      error: err.message || `Some error occurred while creating product`,
    });
  }
};

exports.readAll = async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(err.status || 500).json({
      error: err.message || `Some error occurred while retrieving products`,
    });
  }
};

exports.readOne = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(err.status || 500).json({
      error: err.message || `Some error occurred while retrieving product`,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { name, price } = req.body;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(err.status || 500).json({
      error: err.message || `Some error occurred while updating product`,
    });
  }
};

exports.remove = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if(!product){
        return res.status(404).json({ error: "Product not found" });
    }
    res.status(204).send();
  } catch (err) {
    res.status(err.status || 500).json({
      error: err.message || `Some error occurred while deleting product`,
    });
  }
};
