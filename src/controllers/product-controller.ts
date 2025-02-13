import { RequestHandler } from "express";
import { products } from "../database/product-db";

export const createProduct: RequestHandler = (req, res) => {
  const { name, description, price, stock, category, images } = req.body;

  const lastProduct = products[products.length - 1];
  const newProductId = lastProduct ? lastProduct.id + 1 : 1;

  const product = products.find((product) => product.name === name);
  if (product) {
    product.stock += stock;
    return;
  } else {
    // res.send("haha");
    const newProduct = {
      id: newProductId,
      name,
      description,
      price,
      stock,
      category,
      images,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    products.push(newProduct);
    res.send("Created new product successfully");
  }
};

export const getAllProducts: RequestHandler = (req, res) => {
  if (products) {
    res.send(products);
  } else {
    res.send("not found products");
  }
};

export const getProduct: RequestHandler = (req, res) => {
  const productId = req.params.id;
  const product = products.find((product) => product.id === Number(productId));
  if (!product) {
    res.status(404).send("Product not found");
  } else {
    res.send(product);
  }
};

export const updateProduct: RequestHandler = (req, res) => {
  const productId = req.params.id;
  const { name, description, price, stock, category, images } = req.body;
  const product = products.find((product) => product.id === Number(productId));

  if (!product) {
    res.status(404).send("Product not found");
    return;
  }

  let isEdited = false;

  if (name && product?.name !== name) {
    product.name = name;
    isEdited = true;
  }

  if (description && product?.description !== description) {
    product.description = description;
    isEdited = true;
  }

  if (price && product?.price !== price) {
    product.price = price;
    isEdited = true;
  }

  if (stock && product?.stock !== stock) {
    product.stock = stock;
    isEdited = true;
  }

  if (category && product?.category !== category) {
    product.category = category;
    isEdited = true;
  }

  if (images && product?.images !== images) {
    product.images = images;
    isEdited = true;
  }

  if (isEdited) {
    res.send("Product updated successfully");
  } else {
    res.send("There are no changes");
  }
};

export const deleteProduct: RequestHandler = (req, res) => {
  const productId = req.params.id;
  const productIndex = products.findIndex(
    (product) => product.id === Number(productId)
  );

  if (productIndex === -1) {
    res.status(404).send("Product not found");
    return;
  }
  products.splice(productIndex, 1);
  res.send("Product deleted successfully");
};
