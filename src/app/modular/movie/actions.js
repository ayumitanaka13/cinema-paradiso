import { action } from "typesafe-actions";
import * as types from "./types";

export const saveMovies = (movies) => action(types.SAVE_MOVIES, { movies });

export const saveTitle = (title) => action(types.SAVE_TITLE, { title });

export const savePoster = (poster) => action(types.SAVE_POSTER, { poster });

export const getMoviesByTitle = (title) =>
  action(types.GET_MOVIES_BY_TITLE, { title });

export const nominateMovie = (movie) => action(types.NOMINATE_MOVIE, { movie });

export const removeNomination = (movie) =>
  action(types.REMOVE_NOMINATION, { movie });
