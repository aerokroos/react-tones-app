import React from "react";
import "./App.css";

import useNotes from "./hooks/useNotes";
import useGrid from "./hooks/useGrid";

const App = () => {
  const notes = useNotes();
  const grid = useGrid(notes);

  console.log(grid);

  return (
    <div className="App">
      <h1>App Music</h1>
    </div>
  );
};

export default App;
