import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) return <h6 className="mt-5">Please select a song</h6>;
  return (
    <div>
      <h2 className="mb-5">Details for:</h2>
      <p>
        <span className="lead">Title:</span> <span className="fw-bolder fs-6 text-secondary">{song.title}</span>
      </p>
      <p>
        <span className="lead">Duration:</span> <span className="fw-bolder fs-6 text-secondary">{song.duration}</span>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
