// Function to save notes

const data = Array.from({ length: 2 }, (_, index) => ({
  id: Date.now() + index, // Ensure unique IDs
  title: `Sample Title ${index + 1}`,
  content: `This is a sample note for entry ${index + 1}.`,
  date: new Date().toLocaleDateString(), // Current date
}));

const saveNotes = (notes) => {
  localStorage.setItem("dataNotes", JSON.stringify(notes));
};
// Function to load notes
const loadNotes = () => {
  return JSON.parse(localStorage.getItem("dataNotes") || "[]");
};

const loadData = () => {
  const notes = loadNotes(); // Fetch notes from localStorage
  console.log("Load Notes: ", notes.length);

  if (notes.length < 1) {
    saveNotes(data); // Save 'data' if no notes found
    return data; // Return the default 'data'
  } else {
    return notes; // Return existing notes from localStorage
  }
};


export {loadData, saveNotes, loadNotes };
