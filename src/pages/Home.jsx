import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Video from "../components/Video";
import Search from "../components/Search";
import Result from "../components/Result";
import Modal from "../components/Modal";

import movieInfo from "../app/modular/movie";

const Home = ({ nominations }) => {
  const [showPopup, setShowPopup] = useState("hidden");

  useEffect(() => {
    if (nominations.length === 5) {
      setShowPopup("flex");
    }
  }, [nominations.length]);

  return (
    <div className="App">
      <Video />
      <div className="w-5/6 z-10 mt-16">
        <h1 className="leading-loose">Your Cinema Paradiso</h1>
        <Search />
        <Result />
        <Modal display={showPopup} onClick={() => setShowPopup("hidden")} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  nominations: movieInfo.selectors.nominations(state),
});

export default connect(mapStateToProps, null)(Home);
