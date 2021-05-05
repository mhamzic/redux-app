import React from "react";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";

const App = () => {
  return (
    <div className="row">
      <div className="col-8">
        <SongList />
      </div>
      <div className="col-4">
        <SongDetail />
      </div>
    </div>
  );
};

export default App;
