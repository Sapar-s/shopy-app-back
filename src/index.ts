import express from "express";
import { userRoute } from "./routes/user-route";
import bodyParser from "body-parser";

const app = express();
const port = 5000;
app.use(bodyParser.json());

app.use("/user", userRoute);
app.get("/", (req, res) => {
  res.send("hello wold");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
