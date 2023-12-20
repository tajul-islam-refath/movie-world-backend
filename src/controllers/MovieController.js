const DataModel = require("../models/MovieModel");
const RatingModel = require("../models/RatingModel");
const WatchListModel = require("../models/WatchList");
const CreateService = require("../services/common/CreateService");
const ListService = require("../services/common/ListService");
const DetailsByIDService = require("../services/common/DetailsByIDService");
const DeleteService = require("../services/common/DeleteService");

exports.create = async (req, res) => {
  let Result = await CreateService(req, DataModel);
  res.status(200).json(Result);
};

exports.getAll = async (req, res) => {
  console.log("get-- movies");
  let JoinStage = [
    {
      $lookup: {
        from: "ratings",
        localField: "_id",
        foreignField: "movie",
        as: "ratings",
      },
    },
  ];

  let Result = await ListService(DataModel, JoinStage);
  // console.log("movies list--", Result);
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

exports.getUserWatchlist = async (req, res) => {
  let aggregate = [
    {
      $match: { user: req.headers["email"] },
    },
    {
      $lookup: {
        from: "movies",
        localField: "movieId",
        foreignField: "_id",
        as: "movie",
      },
    },
    {
      $unwind: "$movie",
    },
    {
      $lookup: {
        from: "ratings",
        localField: "_id",
        foreignField: "movie",
        as: "ratings",
      },
    },
    {
      $replaceRoot: { newRoot: "$movie" },
    },
  ];

  let Result = await ListService(WatchListModel, aggregate);
  // console.log("getUserWatchlist --", Result);
  res.status(200).json(Result);
};

exports.addToWatchList = async (req, res) => {
  let Result = await CreateService(req, WatchListModel);
  console.log("add to watch list--", Result);
  res.status(200).json(Result);
};

exports.removeFromWatchList = async (req, res) => {
  let QueryObject = {};
  QueryObject["movieId"] = req.params.id;
  QueryObject["user"] = req.headers["email"];

  let Result = await DeleteService(WatchListModel, QueryObject);

  console.log("add to watch list--", Result);
  res.status(200).json(Result);
};
