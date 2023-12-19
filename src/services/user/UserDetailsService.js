const UserDetailsService = async (Request, DataModel) => {
  try {
    let data = await DataModel.aggregate([
      { $match: { email: Request.headers["email"] } },
      {
        $project: {
          _id: 0,
          email: 1,
          username: 1,
          mobile: 1,
          photo: 1,
        },
      },
    ]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};
module.exports = UserDetailsService;
