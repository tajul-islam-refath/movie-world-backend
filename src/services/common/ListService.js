const ListService = async (DataModel) => {
  try {
    let data = await DataModel.find();
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error };
  }
};
module.exports = ListService;
