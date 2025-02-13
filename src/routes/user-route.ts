import { Router } from "express";
import {
  getProfile,
  getProfiles,
  login,
  register,
  updateUser,
} from "../controllers/user-controller";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/product-controller";
import { addProductToBasket } from "../controllers/basket-controller";

const userRoute = Router();
const productRoute = Router();
const basketRoute = Router();

userRoute
  .post("/register", register)
  .post("/login", login)
  .get("/profile", getProfile)
  .get("/profiles", getProfiles)
  .put("/profile/:id", updateUser);

productRoute
  .post("/products", createProduct)
  .get("/products", getAllProducts)
  .get("/products/:id", getProduct)
  .put("/products/:id", updateProduct)
  .delete("/products/:id", deleteProduct);

basketRoute.post("/basket/:id", addProductToBasket);

export { userRoute, productRoute, basketRoute };
