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

// watch list api
router.get(
  "/watchlist",
  AuthVerifyMiddleware,
  MovieController.getUserWatchlist
);
router.post(
  "/addToWatchList",
  AuthVerifyMiddleware,
  MovieController.addToWatchList
);

router.delete(
  "/watchlist/:id",
  AuthVerifyMiddleware,
  MovieController.removeFromWatchList
);

module.exports = router;
