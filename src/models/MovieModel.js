const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    user: { type: String },
    title: { type: String },
    desc: { type: String },
    image: { type: String },
    trailer: { type: String },
    creators: { type: String },
    strs: { type: String },
    episodes: { type: Number },
    videos: { type: Number },
    photos: { type: Number },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const MovieModel = mongoose.model("movies", DataSchema);
module.exports = MovieModel;
