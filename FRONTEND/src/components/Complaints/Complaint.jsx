// Complaint.jsx
import React from 'react';

const Complaint = ({ selectedPlan }) => {
             
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Complaint Page</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">{selectedPlan.plan}</h2>
        <p className="text-gray-600 mb-2">₹{selectedPlan.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}/Month</p>
        <p className="text-gray-600 mb-2">{selectedPlan.description}</p>
        <p className="text-gray-600 mb-2">Days: {selectedPlan.due}</p>
        <div className="flex justify-between mt-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" >Accept</button>
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" >Reject</button>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
