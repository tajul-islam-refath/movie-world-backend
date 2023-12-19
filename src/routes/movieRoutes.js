const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const MovieController = require("../controllers/MovieController");

router.post("/movies/create", AuthVerifyMiddleware, MovieController.create);
router.get("/movies", MovieController.getAll);
module.exports = router;
