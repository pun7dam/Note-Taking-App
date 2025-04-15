import React from "react";

const PopupDelete = ({ setDeleteNoteId, handleDeleteNote }) => {
  return (
    <div className="fixed inset-0 bg-black/75 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white/75 backdrop-blur-md p-6 rounded-lg shadow-lg text-center">
        <p className="text-lg font-medium mb-4">
          Are you sure you want to delete this note?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleDeleteNote}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Yes, Delete
          </button>
          <button
            onClick={() => setDeleteNoteId(null)}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupDelete;
