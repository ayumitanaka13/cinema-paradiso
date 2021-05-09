import React from "react";

const NominatedMovie = ({ movie, onClick }) => {
  return (
    <div className="NominatedMovie">
      <div className="NominatedMovieContainer">
        <p>
          {movie.Title} <small>({movie.Year})</small>
        </p>
        <button onClick={() => onClick(movie)} className="Button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default NominatedMovie;
