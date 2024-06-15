const mongoose = require("mongoose");
let ip = "127.0.0.1";
let dbUrl = `mongodb://${ip}:27017/edulab`;

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfull");
    require("../model/test");
  })
  .catch((err) => {
    console.log("no connection", err);
  });
