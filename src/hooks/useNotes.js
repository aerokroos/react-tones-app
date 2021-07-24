import { useState, useEffect } from "react";
import { notesArr } from "../constants/constants";

const useNotes = () => {
  const [notes, setNotes] = useState();

  // set notes notes array in notes state
  useEffect(() => {
    setNotes(notesArr);
  }, [notes]);

  return notes;
};

export default useNotes;
