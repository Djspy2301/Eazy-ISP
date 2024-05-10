// Plan.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Complaint from '../Complaints/Complaint';

const Plans = () => {
  const [internetPlans, setInternetPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null); // Add selectedPlan state

  const memberId = sessionStorage.getItem("id");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get(`https://localhost:7026/api/Plan/${memberId}`);
        const plans = response.data.data;
        setInternetPlans(plans);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchPlans();
  }, [memberId]);

  const handlePlanRequest = (plan) => {
    const confirmed = window.confirm(`Are you sure you want to request the ${plan.plan} plan?`);
    if (confirmed) {
      setSelectedPlan(plan); // Set selectedPlan state
      
    }
  };

  return (
    <div className="h-screen container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Internet Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {internetPlans.map((plan, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{plan.plan}</h2>
            <p className="text-gray-600 mb-2">₹{plan.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}/Month</p>
            <p className="text-gray-600 mb-2">{plan.description}</p>
            <p className="text-gray-600 mb-2">Days:{plan.due}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={() => handlePlanRequest(plan)}>Request Plan</button>
          </div>
        ))}
      </div>
      {selectedPlan && <Complaint selectedPlan={selectedPlan} />}
    </div>
  );
};

export default Plans;
