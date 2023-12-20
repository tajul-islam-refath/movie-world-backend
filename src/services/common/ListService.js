const ListService = async (DataModel, JoinStage) => {
  try {
    let data;
    if (JoinStage) {
      data = await DataModel.aggregate([JoinStage]);
    } else {
      data = await DataModel.find();
    }
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error };
  }
};
module.exports = ListService;
