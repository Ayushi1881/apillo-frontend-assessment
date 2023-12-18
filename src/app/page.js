// src/app/Page.js
"use client"
import React, { useEffect, useState } from 'react';
import TableRow from '../app/Components/TableRow';
import EditDialog from '../app/Components/EditDialog';
import DeleteDialog from '../app/Components/DeleteDialog';


const API_URL = 'https://assets.alippo.com/catalog/static/data.json';

export default function Page() {
  const [data, setData] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteRowIndex, setDeleteRowIndex] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDelete = (item, rowIndex) => {
    console.log(item);
    setDeleteItem(item);
    setDeleteRowIndex(rowIndex);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    const updatedData = data.filter((dataItem, index) => index !== deleteRowIndex);
    setData(updatedData);
    setDeleteModalOpen(false);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
  };

  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  

  const handleEdit = (item) => {
    setEditItem(item);
    setEditModalOpen(true);
  };

  const handleSaveEdit = (editedValue) => {
    const updatedData = data.map((dataItem) =>
      dataItem === editItem ? { ...dataItem, name: editedValue } : dataItem
    );

    setData(updatedData);
    setEditModalOpen(false);
  };

  const handleCancelEdit = () => {
    setEditModalOpen(false);
  };

 

  return (
    <div className="flex min-h-screen flex-col items-center text-black overflow-auto w-screen bg-slate-400">
      <h1 className="text-xl m-2 font-serif font-bold text-slate-700">Data Table</h1>
      <div className='overflow-auto rounded-lg shadow-lg w-full'>
        <table className='w-full m-5'>
          {/* ... Table header */}
          <thead className='p-2 m-2 text-white border-gray-900 border-[1px] bg-neutral-800'>
            <tr>
              <th className='p-2 m-3 text-sm font-semibold tracking-wide text-left'>S.no</th>
              <th className='p-2 m-3 text-sm font-semibold tracking-wide text-left'>Name</th>
              <th className='p-2 m-3 text-sm font-semibold tracking-wide text-left'>City</th>
              <th className='p-2 m-3 text-sm font-semibold tracking-wide text-left'>Pincode</th>
              <th className='p-2 m-3 text-sm font-semibold tracking-wide text-left'>Actions</th>
            </tr>
          </thead>
          {/* ... Table body */}
          <tbody className='p-2 m-2 border-[1px] border-black'>
            {data && data.map((item, index) => (
              <TableRow
                key={index}
                index={index}
                item={item}
                handleEdit={() => handleEdit(item)}
                handleDelete={() => handleDelete(item, index)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Dialog */}
      {isEditModalOpen && (
        <EditDialog
          isOpen={isEditModalOpen}
          initialValue={editItem ? editItem.name : ''}
          onClose={handleCancelEdit}
          onSave={handleSaveEdit}
        />
      )}

      {/* Delete Dialog */}
      {isDeleteModalOpen && (
        <DeleteDialog
          isOpen={isDeleteModalOpen}
          itemName={deleteItem.name} 
          rowIndex={deleteRowIndex}
          onCancel={handleCancelDelete}
          onDelete={handleConfirmDelete}
        />
      )}
    </div>
  );
}
