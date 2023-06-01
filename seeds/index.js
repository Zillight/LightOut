const mongoose = require("mongoose");
const Campsite = require("../models/campsite");
const cities = require ('./cities')

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

const seedDB = async () => {
  await Campsite.deleteMany({});
  for (i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const city = cities[random1000];
    const camp = new Campsite({
      location: `${city.city}, ${city.state}`,
    });
    await camp.save();
  }
};

seedDB();
