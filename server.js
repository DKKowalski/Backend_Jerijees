const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const mongoose = require("mongoose");

//DB Connection
const DB = process.env.LOCAL_DATABASE;
mongoose.connect(DB).then(console.log("db connected successfully :D"));

const app = require("./app");
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});
