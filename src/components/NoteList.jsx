import React from "react";
import Note from "./Note";
import PopupDelete from "./PopupDelete";
import EditNote from "./EditNote";
import { saveNotes } from "../Data/data";

const NoteList = ({ notes, setNotes }) => {
  const [deleteNoteId, setDeleteNoteId] = React.useState(null);
  const [editNoteId, setEditNoteId] = React.useState(null);

  const handleDeleteNote = (id) => {
    console.log(deleteNoteId);
    const updatedNotes = notes.filter((note) => note.id !== deleteNoteId);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
    setDeleteNoteId(null);
  };

  return (
    <>
      <h1 className="text-2xl font-semibold my-4 mx-5">Your Notes </h1>
      <hr />
      <div className="mt-4 rounded-lg p-2 shadow-2xl">
        {notes.length === 0 ? (
          <h1 className="text-xl font-semibold my-4 text-center flex justify-center">
            No Notes Found
          </h1>
        ) : (
          <div className="grid flex-col-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-y-auto p-2">
            {notes.map((note) => (
              <Note
                key={note.id}
                title={note.title}
                content={note.content}
                date={note.date} //>
                deleteNote={() => setDeleteNoteId(note.id)}
                editNote={() => setEditNoteId(note.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Delete popup section */}
      {deleteNoteId !== null && (
        <PopupDelete
          setDeleteNoteId={setDeleteNoteId}
          handleDeleteNote={handleDeleteNote}
        />
      )}

      {/* Edit of form */}
      {editNoteId !== null && (
        <EditNote
          notes={notes}
          setNotes={setNotes}
          editNoteId={editNoteId}
          setEditNoteId={setEditNoteId}
        />
      )}
    </>
  );
};

export default NoteList;
