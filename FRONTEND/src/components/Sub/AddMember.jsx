import React, { useState } from 'react';
import axios from 'axios';

const AddMember = () => {

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [admin, setAdmin] = useState('');
  const [plan, setPlan] = useState('');
  const [due, setDue] = useState('');
  const [password, setPassword] = useState('');

  let formData = {};

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleAdminChange = (e) => setAdmin(e.target.value);
  const handlePlanChange = (e) => setPlan(e.target.value);
  const handleDueChange = (e) => setDue(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleCPasswordChange = (e) => setPassword(e.target.value);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Date.now();
    let isAdmin = false;
    formData = {id, username, name, phone, admin, plan, due, isAdmin, password}
    ;(async()=>{
      try {
        const response = await axios.post('https://localhost:7026/api/Member/create', formData);
        console.log('Response:', response.data);
        // Optionally, you can redirect to another page or show a success message here
      } catch (error) {
        console.error('Error adding member:', error);
        // Optionally, you can show an error message to the user here
      }
    })()
    
    console.log(formData);
  };

  return (
    <div className="h-screen container mx-auto p-4 flex justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleUsernameChange} className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleNameChange} className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full" />
          </div>

          <div className="mb-4">
            <label htmlFor="admin" className="block text-gray-700 text-sm font-bold mb-2">Admin</label>
            <input type="text" id="admin" name="admin" value={formData.admin} onChange={handleAdminChange} className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full" />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handlePhoneChange} className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full" />
          </div>

          <div className="mb-4">
            <label htmlFor="plan" className="block text-gray-700 text-sm font-bold mb-2">Plan</label>
            <input type="text" id="plan" name="plan" value={formData.planN} onChange={handlePlanChange} className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full" />
          </div>

          <div className="mb-4">
            <label htmlFor="due" className="block text-gray-700 text-sm font-bold mb-2">Due</label>
            <input type="text" id="due" name="due" value={formData.due} onChange={handleDueChange} className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="text" id="password" name="password" value={formData.password} onChange={handlePasswordChange} className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full" />
          </div>

          <div className="mb-4">
            <label htmlFor="cPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input type="text" id="cPassword" name="cPassword" onChange={handleCPasswordChange} className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full" />
          </div>
          {/* Add more input fields for other form fields */}
          <div className="flex items-center justify-center mt-8">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Register</button>
          </div>
        </form>
      </div>
    </div>
  );

};
export default AddMember;
