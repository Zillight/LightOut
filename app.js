const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Campsite = require("./models/campsite");

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

// app.get("/makeCampsite", async (req, res) => {
//   const site = new Campsite({
//     title: "Jabi Lake Camp",
//     description: "Affordable camping",
//   });
//   await site.save();
//   res.send(site);
// });

app.get("/makeCampsite", async (req, res) => {
  const existingCampsite = await Campsite.findOne({ title: "Jabi Lake Camp" });
  if (existingCampsite) {
    res.send("Campsite already exists");
  } else {
    const site = new Campsite({
      title: "Jabi Lake Camp",
      description: "Affordable camping",
    });
    await site.save();
    res.send(site);
  }
});

app.listen(3000, () => {
  console.log(`Serving Port 3000`);
});
