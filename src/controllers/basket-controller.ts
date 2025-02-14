import { RequestHandler } from "express";
import { products } from "../database/product-db";
import { basket } from "../database/basket-db";

export const addProductToBasket: RequestHandler = (req, res) => {
  const productId = req.params.id;

  let product = products.find((product) => product.id === Number(productId));
  console.log({ product });
  if (!product) {
    res.status(404).send("not found products");
    return;
  }

  // if (product) {
  //   product = product;
  //   res.send("Added stock");
  //   return;
  // }

  product.stock -= 1;

  basket.push(product);
  res.status(200).send("Successfully added products to the basket");
};

export const viewBasket: RequestHandler = (req, res) => {
  if (basket.length <= 0) {
    res.status(404).send("basket is empty");
  }
  res.status(200).send(basket);
};

export const removeFromCard: RequestHandler = (req, res) => {
  const productId = req.params.id;
  const cardIndex = basket.findIndex((card) => card.id === Number(productId));

  if (cardIndex < 0) {
    res.status(404).send("there are no cards");
    return;
  }

  basket.splice(cardIndex, 1);
  res.status(200).send("Successfully removed card from basket");
};
