const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const UsersController = require("../controllers/UsersController");

router.post("/registration", UsersController.Registration);
router.post("/login", UsersController.Login);
router.post(
  "/profileUpdate",
  AuthVerifyMiddleware,
  UsersController.ProfileUpdate
);
router.get(
  "/profileDetails",
  AuthVerifyMiddleware,
  UsersController.ProfileDetails
);

module.exports = router;
