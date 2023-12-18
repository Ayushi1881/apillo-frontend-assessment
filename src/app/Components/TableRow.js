// src/app/Components/TableRow.js
import React from 'react';

export default function TableRow({ index, item, handleEdit, handleDelete }) {
  return (
    <tr className={`${index % 2 === 0 ? 'bg-slate-200' : 'bg-white'}`}>
      <td className='p-2 m-3 text-sm text-left'>{index + 1}</td>
      <td className='p-2 m-3 text-sm text-left'>{item.name}</td>
      <td className='p-2 m-3 text-sm text-left'>{item.city}</td>
      <td className='p-2 m-3 text-sm text-left'>{item.pinCode}</td>
      <td className='p-2 m-3 text-sm text-left '>
        <button className="m-3 p-2 text-sm rounded-md border-2 border-teal-500 text-teal-900 hover:text-white bg-teal-400 hover:shadow-lg hover:bg-teal-600" onClick={handleEdit}>Edit</button>
        <button className="m-3 p-2 text-sm rounded-md border-2 border-red-400 text-rose-900 hover:text-white  bg-red-300 hover:shadow-lg hover:bg-red-600" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}
