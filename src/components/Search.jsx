import React, { useState } from "react";
import { connect } from "react-redux";

import movieInfo from "../app/modular/movie";

const Search = ({ getMoviesByTitle }) => {
  const [movie, setMovie] = useState("");

  const handleChange = (e) => {
    setMovie(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMoviesByTitle(movie);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full my-8 sm:my-12">
        <input
          value={movie}
          onChange={handleChange}
          placeholder="Search your favorite movie with titles"
          className="SearchInput"
        />
        <button type="submit" className="SearchButton">
          Search
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  getMoviesByTitle: movieInfo.actions.getMoviesByTitle,
};

export default connect(null, mapDispatchToProps)(Search);
