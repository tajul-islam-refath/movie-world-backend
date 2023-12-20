const DataModel = require("../models/MovieModel");
const RatingModel = require("../models/RatingModel");
const WatchListModel = require("../models/WatchList");
const CreateService = require("../services/common/CreateService");
const ListService = require("../services/common/ListService");
const DetailsByIDService = require("../services/common/DetailsByIDService");

exports.create = async (req, res) => {
  let Result = await CreateService(req, DataModel);
  res.status(200).json(Result);
};

exports.getAll = async (req, res) => {
  let JoinStage = {
    $lookup: {
      from: "ratings",
      localField: "_id",
      foreignField: "movie",
      as: "ratings",
    },
  };
  let Result = await ListService(DataModel, JoinStage);
  res.status(200).json(Result);
};

exports.getSingleById = async (req, res) => {
  let JoinStage = {
    $lookup: {
      from: "ratings",
      localField: "_id",
      foreignField: "movie",
      as: "ratings",
    },
  };

  let Result = await DetailsByIDService(req, DataModel, JoinStage);
  res.status(200).json(Result);
};

exports.addMovieRating = async (req, res) => {
  let Result = await CreateService(req, RatingModel);
  res.status(200).json(Result);
};

exports.addToWatchList = async (req, res) => {
  let Result = await CreateService(req, WatchListModel);
  res.status(200).json(Result);
};
