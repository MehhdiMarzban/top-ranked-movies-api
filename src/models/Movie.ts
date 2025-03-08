import mongoose from "mongoose";
import { IMovie } from "../types/movie";

const movieSchema = new mongoose.Schema<IMovie>(
    {
        title: { type: String, required: true },
        year: { type: Number, required: true },
        rating: { type: Number, required: true },
        director: { type: String, required: true },
        genre: [{ type: String }],
        plot: { type: String, required: true },
        cast: [{ type: String }],
        rank: { type: Number, required: true, unique: true },
        imdbId: { type: String, required: true, unique: true },
    },
    {
        timestamps: true,
    }
);

export const Movie = mongoose.model<IMovie>("Movie", movieSchema);
