import * as Tone from "tone";

// adding array of object notes
let notesArr = [
  { note: "A", isActive: false },
  { note: "G", isActive: false },
  { note: "E", isActive: false },
  { note: "D", isActive: false },
  { note: "C", isActive: false },
];

// adding synth
const synth = new Tone.Synth().toDestination();

export { notesArr, synth };
