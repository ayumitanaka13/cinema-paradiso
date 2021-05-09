import React, { useState } from "react";
import { connect } from "react-redux";

import Icon from "./Icon";
import Movie from "./Movie";
import Nominations from "./Nomination";
import movieInfo from "../app/modular/movie";

const Result = ({ movieResults, title, nominateMovie, nominations }) => {
  const [openNominations, setOpenNominations] = useState("hidden");

  const handleClick = (movie) => {
    if (nominations.length === 5) {
      alert("You already nominated 5 movies");
    } else {
      setOpenNominations("flex");
      nominateMovie(movie);
    }
  };

  const showList = () => {
    if (openNominations === "hidden") {
      setOpenNominations("flex");
    } else {
      setOpenNominations("hidden");
    }
  };

  const isNominated = (id) => {
    for (let i = 0; i < nominations.length; i++) {
      if (nominations[i].imdbID === id) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="Result">
      <div className="ResultContainer">
        <p>
          {title && movieResults
            ? `Search results for "${title}"`
            : title && !movieResults
            ? `No search results for "${title}"`
            : "Nominate your 5 favorite movies"}
        </p>
        <button onClick={showList} className="flex">
          <Icon />
          Your list
        </button>
      </div>

      <Nominations display={openNominations} />

      {movieResults &&
        movieResults.map((movie, i) => (
          <Movie
            key={i}
            movie={movie}
            onClick={handleClick}
            disabled={isNominated(movie.imdbID)}
          />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieResults: movieInfo.selectors.movieResults(state),
  title: movieInfo.selectors.title(state),
  poster: movieInfo.selectors.poster(state),
  nominations: movieInfo.selectors.nominations(state),
});

const mapDispatchToProps = {
  nominateMovie: movieInfo.actions.nominateMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
