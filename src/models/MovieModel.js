const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    name: { type: String },
    desc: { type: String },
    image: { type: String },
    trailer: { type: String },
    creators: { type: Array },
    strs: { type: Array },
    episodes: { type: Number },
    videos: { type: Number },
    photes: { type: Number },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const MovieModel = mongoose.model("movies", DataSchema);
module.exports = MovieModel;
