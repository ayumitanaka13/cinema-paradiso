import produce from "immer";
import * as types from "./types";

const initalState = {
  movieResults: null,
  title: null,
  poster: null,
  nominations: [],
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case types.SAVE_MOVIES:
      state.movieResults = action.payload.movies;
      break;
    case types.SAVE_TITLE:
      state.title = action.payload.title;
      break;
    case types.SAVE_POSTER:
      state.poster = action.payload.poster;
      break;
    case types.NOMINATE_MOVIE:
      state.nominations = [action.payload.movie, ...state.nominations];
      break;
    case types.REMOVE_NOMINATION:
      state.nominations = state.nominations.filter(
        (nomination) => nomination.imdbID !== action.payload.movie.imdbID
      );
      break;
    default:
      break;
  }
}, initalState);

export default reducer;
