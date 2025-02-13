import express from "express";
import { productRoute, userRoute, basketRoute } from "./routes/user-route";
import bodyParser from "body-parser";

const app = express();
const port = 5000;
app.use(bodyParser.json());

app.use("/user", userRoute);
app.use(productRoute);
app.use(basketRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
