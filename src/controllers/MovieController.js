const DataModel = require("../models/MovieModel");
const CreateService = require("../services/common/CreateService");
const ListService = require("../services/common/ListService");

exports.create = async (req, res) => {
  let Result = await CreateService(req, DataModel);
  res.status(200).json(Result);
};

exports.getAll = async (req, res) => {
  let Result = await ListService(DataModel);
  res.status(200).json(Result);
};
