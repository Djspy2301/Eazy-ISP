// Subscription.jsx
import React from 'react';

const Subscription = () => {

  const subscription = {
    plan: 'Premium Plan',
    purchaseDate: new Date('2024-03-15'), 
    remainingDays: calculateRemainingDays(new Date('2024-03-15')),
  };

  // Function to calculate remaining days
  function calculateRemainingDays(purchaseDate) {
    const oneMonth = 30 * 24 * 60 * 60 * 1000; 
    const now = new Date();
    const expirationDate = new Date(purchaseDate.getTime() + oneMonth);
    const remainingTime = expirationDate.getTime() - now.getTime();
    return Math.ceil(remainingTime / (24 * 60 * 60 * 1000));
  }

  return (
    <div className="h-screen container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">Your Subscription</h1>
      <div className="bg-white p-8 rounded-lg shadow-md mx-auto" style={{ maxWidth: '500px' }}>
        <h2 className="text-xl font-semibold mb-2">{subscription.plan}</h2>
        <p className="text-gray-600 mb-2">
          Remaining Days: {subscription.remainingDays} days
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-lg mr-2">
            Enjoy Your Plan
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm py-2 px-4 rounded-lg transition-colors duration-300">
            Renew Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
