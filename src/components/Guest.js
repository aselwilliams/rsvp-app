import React from "react";

function Guest({
  guest,
  handleChange,
  handleEdit,
  handleCount,
  isEditing,
  handleUpdate,
  editId,
  handleDelete,
}) {
  const underEdit = guest.id === editId ? true : false;

  return (
    <div className="box">
      {underEdit ? (
        <input className="edit-input" onChange={handleChange} />
      ) : (
        <h3>{guest.name}</h3>
      )}
      <div className="confirm">
        <label>confirm</label>
        <input
          type="checkbox"
          value={guest.confirmed}
          onChange={() => handleCount(guest)}
        />
      </div>
      <div className="btn-container">
        <button
          onClick={
            isEditing
              ? () => handleUpdate(guest.id)
              : () => handleEdit(guest.id)
          }
        >
          {underEdit ? "Submit" : "Edit"}
        </button>
        <button onClick={() => handleDelete(guest)}>Remove</button>
      </div>
    </div>
  );
}

export default Guest;
