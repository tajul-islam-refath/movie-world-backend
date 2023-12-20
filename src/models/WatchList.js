const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    user: { type: String },
    movieId: { type: mongoose.Schema.Types.ObjectId },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const WatchListModel = mongoose.model("watchlists", DataSchema);
module.exports = WatchListModel;
