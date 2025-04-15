import React, { useEffect } from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import { loadData } from "../Data/data";

const NoteApp = () => {
  const [notes, setNotes] = React.useState([]);

  useEffect(() => {
    // Retrieve notes from localStorage : Sample data
    const savedNotes = loadData();
    setNotes(savedNotes);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto w-1/2">
        <h1 className="text-2xl font-bold text-center mb-6">
          Notes Taking App
        </h1>

        {/* Add form */}
        <AddNote notes={notes} setNotes={setNotes} />

        {/* List of all the notes recorded */}
        <NoteList notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
};

export default NoteApp;
