const DeleteService = async (Model, QueryObject) => {
  try {
    let Delete = await Model.deleteMany(QueryObject);

    return { status: "success", Delete: Delete };
  } catch (error) {
    return { status: "fail", data: error };
  }
};
module.exports = DeleteService;
