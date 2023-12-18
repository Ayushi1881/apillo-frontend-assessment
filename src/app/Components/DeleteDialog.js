// src/app/Components/DeleteDialog.js
import React from 'react';

export default function DeleteDialog({ isOpen, itemName, rowIndex, onCancel, onDelete }) {
  return (
    <div className={`delete-modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Delete {rowIndex + 1}</h2>
          <div className="modal-buttons">
            <button className='text-green-800 shadow-md hover:bg-green-400 hover:text-green-200 rounded-lg bg-green-300 m-4 p-3' onClick={onDelete}>Delete</button>
            <button className='text-red-800 shadow-md hover:bg-red-400 hover:text-red-200 rounded-lg bg-red-300 m-4 p-3' onClick={onCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
