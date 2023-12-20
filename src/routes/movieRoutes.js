const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const MovieController = require("../controllers/MovieController");

router.post("/movies/create", AuthVerifyMiddleware, MovieController.create);
router.get("/movies", MovieController.getAll);
router.get("/movies/:id", MovieController.getSingleById);

router.post(
  "/movies/rating/add",
  AuthVerifyMiddleware,
  MovieController.addMovieRating
);

router.post(
  "/movies/addToWatchList",
  AuthVerifyMiddleware,
  MovieController.addToWatchList
);

module.exports = router;
