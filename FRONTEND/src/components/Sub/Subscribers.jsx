import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        // Make GET request to fetch subscribers from the API
        const response = await axios.get('https://localhost:7026/api/Member');
        // Update state with the fetched subscribers
        setSubscribers(response.data);
      } catch (error) {
        console.error('Error fetching subscribers:', error);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div className="h-screen container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">Subscribers</h1>
      <div className="mb-4 flex justify-end">
        <Link to="/admin/subscribers/add-member">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Add Member
          </button>
        </Link>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Plan</th>
            <th className="border border-gray-300 px-4 py-2">Due Date</th>
            <th className="border border-gray-300 px-4 py-2">Renew</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map(subscriber => (
            <tr key={subscriber.id}>
              <td className="border border-gray-300 px-4 py-2">{subscriber.name}</td>
              <td className="border border-gray-300 px-4 py-2">{subscriber.phone}</td>
              <td className="border border-gray-300 px-4 py-2">{subscriber.plan}</td>
              <td className="border border-gray-300 px-4 py-2">{subscriber.dueDate}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300">
                  {subscriber.renew||"renew"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Subscribers;
