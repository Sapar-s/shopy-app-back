import express from "express";
import { productRoute, userRoute, basketRoute } from "./routes/user-route";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
const port = 5000;
app.use(bodyParser.json());

app.use("/user", userRoute);
app.use(productRoute);
app.use(basketRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
