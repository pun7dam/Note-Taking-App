import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const Note = ({ title, content, date, deleteNote, editNote }) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-amber-100 rounded-lg shadow-md hover:shadow-lg transition-transform transform duration-200">
      <h1 className="text-md font-bold text-center">{title}</h1>
      <hr />
      <p className="text-gray-700 text-justify max-h-30 min-h-30 overflow-y-auto pr-2">
        {content}
      </p>
      <div className="flex justify-between items-center my-2 flex-end">
        <span className="text-gray-500  text-xs md:text-sm">{date}</span>
        <div className="flex items-center justify-center gap-1">
          <button
            onClick={() => editNote()}
            className="hover:text-blue-500 hover:scale-120 transition transform duration-200"
          >
            <FaEdit className="text-blue-500 w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={deleteNote}
            className="hover:text-red-500 hover:scale-120 transition transform duration-200"
          >
            <MdDeleteForever className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
