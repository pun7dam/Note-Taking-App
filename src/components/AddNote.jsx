import React from "react";
import { saveNotes } from "../Data/data";

const AddNote = ({ notes, setNotes }) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const newNote = {
        id: Date.now(),
        title,
        content,
        date: new Date().toLocaleDateString(),
      };
      const updatedNotes = [...notes, newNote]; // Create the updated array
      console.log(updatedNotes);
      setNotes(updatedNotes); // Update the state
      saveNotes(updatedNotes); // Save the updated array to local storage

      setTitle("");
      setContent("");
    }
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="p-4 rounded-lg flex flex-col gap-4 outline outline-gray-200 bg-white "
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="outline outline-gray-300 rounded-sm pl-4 focus:outline-blue-500"
      />
      <textarea
        placeholder="Write your note here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="pl-4 rounded-sm outline outline-gray-300 focus:outline-blue-500 min-h-20 min-w-full overflow-y-auto"
      />
      <div className="flex justify-end gap-4 mr-2">
        <button
          type="submit"
          className="bg-blue-700 rounded-md text-xs text-white hover:bg-blue-800 px-2"
        >
          Add Note
        </button>
        <button
          type="reset"
          onClick={resetForm}
          className="bg-gray-500 rounded-sm text-xs text-white hover:bg-gray-600 p-2"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default AddNote;
