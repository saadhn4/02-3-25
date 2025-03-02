import express from "express";
import "./utils/dbConnect.js";
import userRouter from "./controllers/users/index.js";

const app = express();
app.use(express.json());
const PORT = config.get("PORT");

app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "Hello world!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.use("/api/public", publicRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
