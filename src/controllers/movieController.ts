import { Request, Response } from "express";
import { Movie } from "../models/Movie";

export const getAllMovies = async (req: Request, res: Response) => {
    try {
        const movies = await Movie.find().sort({ rank: 1 });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: "Error fetching movies" });
    }
};

export const getMovieById = async (req: Request, res: Response) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: "Error fetching movie" });
    }
};

export const getMoviesByRank = async (req: Request, res: Response) => {
    try {
        const { start = 1, limit = 10 } = req.query;
        const movies = await Movie.find({
            rank: {
                $gte: Number(start),
                $lte: Number(start) + Number(limit) - 1,
            },
        }).sort({ rank: 1 });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: "Error fetching movies" });
    }
};
