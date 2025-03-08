import { Router } from "express";
import { getAllMovies, getMovieById, getMoviesByRank } from "../controllers/movieController";
import { auth } from "../middleware/auth";

const router = Router();

router.get("/", auth, getAllMovies);
router.get("/rank", auth, getMoviesByRank);
router.get("/:id", auth, getMovieById);

export default router;
