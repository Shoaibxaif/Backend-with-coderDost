require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require("morgan");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

console.log('env',process.env.MONGODB_URI);

//bodyParser
server.use(cors());
server.use(express.json());
server.use(morgan("default"));
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/product", productRouter.router);
server.use("/user", userRouter.router);

//connection to MongoDB database

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("connected to MongoDB");
}






server.listen(process.env.PORT, () => {
  console.log("server started");
});
