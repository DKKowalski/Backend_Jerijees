const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "dev") app.use(morgan("dev"));

app.use("/api/v1.0/users", userRouter);

module.exports = app;