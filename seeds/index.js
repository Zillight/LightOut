const mongoose = require("mongoose");
const Campsite = require("../models/campsite");

mongoose.connect("mongodb://localhost:27017/lightOut", {
  useNewUrlParser: true,
  //   useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected");
});

