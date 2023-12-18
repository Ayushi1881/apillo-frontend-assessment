// src/app/Components/EditDialog.js
import React, { useState } from 'react';

export default function EditDialog({ isOpen, initialValue, onClose, onSave }) {
  const [editedValue, setEditedValue] = useState(initialValue || '-');

  const handleSave = () => {
    onSave(editedValue);
    setEditedValue('');
    onClose();
  };

  const handleCancel = () => {
    setEditedValue('');
    onClose();
  };

  return (
    <div className={`edit-modal ${isOpen ? 'open' : 'closed'} w-1/3 p-4`}>
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Edit Name</h2>
          {/* <label htmlFor="editInput">Edit Name:</label> */}
          <input
            className='border-2 border-gray-400 rounded-lg p-2 m-2 shadow-md'
            type="text"
            id="editInput"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          <div className="modal-buttons w-full">
            <button className='text-green-800 shadow-md hover:bg-green-400 hover:text-green-200 rounded-lg bg-green-300 m-4 p-3' onClick={handleSave}>Save</button>
            <button className='text-red-800 shadow-md hover:bg-red-400 hover:text-red-200  rounded-lg bg-red-300 m-4 p-3' onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
