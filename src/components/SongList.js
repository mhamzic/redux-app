import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = (props) => {
  return (
    <div>
      <h2 className="mb-5">Song List</h2>
      {props.songs.map((song) => (
        <div className="list-group-item d-flex justify-content-between" key={song.id}>
          <div className="">
            <h6>{song.title}</h6>
          </div>
          <div className="">
            <button className="btn btn-primary btn-sm" onClick={() => props.selectSong(song)}>
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
