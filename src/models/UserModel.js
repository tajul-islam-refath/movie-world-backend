const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email: { type: String, unique: true },
    username: { type: String, unique: true },
    mobile: { type: String },
    password: { type: String },
    photo: { type: String },
    role: {
      type: String,
      default: "user",
    },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const UserModel = mongoose.model("users", DataSchema);
module.exports = UserModel;
