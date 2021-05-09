import { combineReducers } from "redux";

import movieInfo from "./modular/movie";

const reducer = combineReducers({
  [movieInfo.name]: movieInfo.reducer,
});

export default reducer;
