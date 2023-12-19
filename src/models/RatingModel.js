const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    user: { type: String, unique: true },
    movie: { type: mongoose.Schema.ObjectId },
    rating: { type: Number },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const RatingModel = mongoose.model("ratings", DataSchema);
module.exports = RatingModel;
