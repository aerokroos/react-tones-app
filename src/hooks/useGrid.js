import { useState, useEffect } from "react";

const useGrid = (notes) => {
  const [grid, setGrid] = useState([]);

  // creating grid to store notes
  useEffect(() => {
    const createGrid = () => {
      let gridArr = [];
      for (let index = 0; index < 10; index++) {
        gridArr.push(notes);
      }
      setGrid(gridArr);
    };

    createGrid();
  }, [notes]);

  return grid;
};

export default useGrid;
