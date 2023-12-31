const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    user: { type: String },
    movie: { type: mongoose.Schema.Types.ObjectId },
    rating: { type: Number },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const RatingModel = mongoose.model("ratings", DataSchema);
module.exports = RatingModel;
