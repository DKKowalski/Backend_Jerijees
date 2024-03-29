const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "production") app.use(morgan("dev"));

app.use("/api/v1.0/users", userRouter);
app.get("/", (req, res) => {
  res.status(200).send("It is cold and chilly up here❄️☃️🏂");
});

module.exports = app;
