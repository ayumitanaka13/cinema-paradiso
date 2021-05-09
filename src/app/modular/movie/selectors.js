const select = (state) => state.movie;

export const movieResults = (state) => select(state).movieResults;

export const title = (state) => select(state).title;

export const poster = (state) => select(state).poster;

export const nominations = (state) => select(state).nominations;
