import React from "react";

const Movie = ({ movie, disabled, onClick }) => {
  return (
    <div className="Movie">
      <div className="MovieContainer">
        <img src={movie.Poster} alt={movie.Title} className="Poster" />
        <p className="my-4">
          {movie.Title} <small>({movie.Year})</small>
        </p>
        <button
          onClick={() => onClick(movie)}
          disabled={disabled}
          className="Button disabled:opacity-0 disabled:cursor-default"
        >
          Nominate
        </button>
      </div>
    </div>
  );
};

export default Movie;
