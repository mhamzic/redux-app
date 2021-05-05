import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { id: 1, title: "Yesterday", duration: "2:05" },
    { id: 2, title: "Hey Jude", duration: "8:09" },
    { id: 3, title: "A Hard Day's Night", duration: "2:35" },
    { id: 4, title: "Lucy in the Sky", duration: "3:24" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
