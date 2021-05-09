import React from "react";
import { connect } from "react-redux";

import NominatedMovie from "./NominatedMovie";
import movieInfo from "../app/modular/movie";

const Nomination = ({ nominations, removeNomination, display }) => {
  const handleClick = (movie) => {
    removeNomination(movie);
  };

  return (
    <div className={`${display} w-full flex-wrap my-4`}>
      {nominations.length !== 0 ? (
        nominations.map((nomination, i) => (
          <NominatedMovie key={i} movie={nomination} onClick={handleClick} />
        ))
      ) : (
        <div className="NominatedMovieContainer justify-end mx-2 p-4">
          <p>You haven't nominated yet</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  nominations: movieInfo.selectors.nominations(state),
});

const mapDispatchToProps = {
  removeNomination: movieInfo.actions.removeNomination,
};
export default connect(mapStateToProps, mapDispatchToProps)(Nomination);
