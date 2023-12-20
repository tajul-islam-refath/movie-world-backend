const mongoose = require("mongoose");

/**
 * @param(request, model)
 * @returns {success:"status", data:""}
 */
const DetailsByIDService = async (Request, DataModel, JoinStage) => {
  try {
    let DetailsID = Request.params.id;
    const ObjectId = mongoose.Types.ObjectId;
    let QueryObject = {};
    QueryObject["_id"] = new ObjectId(DetailsID);

    let data;

    //
    if (JoinStage)
      data = await DataModel.aggregate([{ $match: QueryObject }, JoinStage]);
    //
    else data = await DataModel.aggregate([{ $match: QueryObject }]);

    return { status: "success", data: data[0] };
  } catch (error) {
    return { status: "fail", data: error };
  }
};
module.exports = DetailsByIDService;
