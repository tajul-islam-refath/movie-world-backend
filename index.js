const app = require("./app");
// Database Lib Import
const mongoose = require("mongoose");

// Mongo DB Database Connection
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASS;
let URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ltldm.mongodb.net/movie_world?retryWrites=true&w=majority`;
const PORT = 5000;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Database Connection Success");
    app.listen(PORT, function () {
      console.log("App Running successfully into - ", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
