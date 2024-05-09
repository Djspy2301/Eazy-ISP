import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddPlan = () => {
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState('');
  const [description, setDescription] = useState('');
  const [due, setDue] = useState('');
  const [admin, setAdmin] = useState('');
  const [price, setPrice] = useState('');
  
  // Fetch plans from the API
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get('https://localhost:7026/api/Plan');
        setPlans(res.data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };
    
    fetchPlans();
  }, []);
  
  const handleAddPlan = async () => {
    const id = Date.now()
    try {
      
      const response = await axios.post('https://localhost:7026/api/Plan', {
        id: id,
        plan: newPlan,
        description: description,
        due: due,
        admin: admin,
        price: price
      });
      
      setPlans(prevPlans => [...prevPlans, response.data]);
      
      setNewPlan('');
      setDescription('');
      setDue('');
      setAdmin('');
      setPrice('');
    } catch (error) {
      console.error('Error adding plan:', error);
    }
  };
  
  return (
    <div className="h-screen container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">Add Plan</h1>
      
      {/* Input fields to enter plan details */}
      <div className="mb-4 text-center">
        <label htmlFor="newPlan" className="block text-gray-700 text-sm font-bold mb-2">New Plan Name</label>
        <input type="text" id="newPlan" value={newPlan} onChange={(e) => setNewPlan(e.target.value)} className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block mx-auto w-1/2 text-center" />
      </div>
      <div className="mb-4 text-center">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block mx-auto w-1/2 text-center" />
      </div>
      <div className="mb-4 text-center">
        <label htmlFor="due" className="block text-gray-700 text-sm font-bold mb-2">Due Date</label>
        <input type="text" id="due" value={due} onChange={(e) => setDue(e.target.value)} className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block mx-auto w-1/2 text-center" />
      </div>
      <div className="mb-4 text-center">
        <label htmlFor="admin" className="block text-gray-700 text-sm font-bold mb-2">Admin</label>
        <input type="text" id="admin" value={admin} onChange={(e) => setAdmin(e.target.value)} className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block mx-auto w-1/2 text-center" />
      </div>
      <div className="mb-4 text-center">
        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block mx-auto w-1/2 text-center" />
      </div>
      
      <div className="mb-4 text-center">
        <button onClick={handleAddPlan} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Add Plan</button>
      </div>
      
      {/* Display cards for each plan */}
      <div className="grid grid-cols-3 gap-4">
        {plans.map(plan => (
          <div key={plan.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">{plan.name}</h2>
            <p>Plan: {plan.plan}</p>
            <p>Description: {plan.description}</p>
            <p>Due Date: {plan.due}</p>
            <p>Price: {plan.price}</p>
            {/* Display other plan details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddPlan;
