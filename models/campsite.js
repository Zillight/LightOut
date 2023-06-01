const mongoose = require("mongoose");

const CampsiteSchema = new mongoose.Schema({
  title: String,
  price: String,
  description: String,
  location: String,
});

module.exports = mongoose.model("Campsite", CampsiteSchema);
