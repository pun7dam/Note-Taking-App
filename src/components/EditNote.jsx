import React, { useEffect } from "react";
import { saveNotes } from "../Data/data";

const EditNote = ({ notes, setNotes, editNoteId, setEditNoteId }) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  useEffect(() => {
    const matchingNote = notes.find((note) => note.id === editNoteId);
    if (matchingNote) {
      setTitle(matchingNote.title);
      setContent(matchingNote.content);
    }
  }, [editNoteId]);

  const editFormSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const updatedNotes = notes.map((note) =>
        note.id === editNoteId ? { ...note, title, content } : { ...note }
      );
      setNotes(updatedNotes);
      saveNotes(updatedNotes);
      setEditNoteId(null);
    }
  };
  const cancelForm = () => {
    setEditNoteId(null);
  };

  return (
    <div className="fixed inset-0 bg-black/75 bg-opacity-50 flex items-center justify-center">
      <div className="backdrop-blur-md p-6 rounded-lg text-center bg-green-50">
        <form
          onSubmit={editFormSubmit}
          className="p-4 rounded-lg flex flex-col gap-4  bg-white "
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            className="outline outline-gray-300 rounded-sm pl-4 focus:outline-blue-500"
          />
          <textarea
            placeholder="Write your note here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="pl-4 rounded-sm outline outline-gray-300 focus:outline-blue-500 min-h-40 min-w-full overflow-y-auto"
          />
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="bg-blue-700 rounded-md py-1 px-4 text-white hover:bg-blue-800"
            >
              Update Note
            </button>
            <button
              type="reset"
              onClick={cancelForm}
              className="bg-gray-500 rounded-md py-1 px-4 text-white hover:bg-gray-600"
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
