import { RequestHandler } from "express";
import { products } from "../database/product-db";
import { basket } from "../database/basket-db";

export const addProductToBasket: RequestHandler = (req, res) => {
  const productId = req.params.id;
  const product = products.find((product) => product.id === Number(productId));
  console.log({ product });
  // if (products.length <= 0) {
  //   res.send("not found products");
  // } else {
  //   basket.push(product);
  //   res.send("Successfully added products to the basket");
  // }
};
