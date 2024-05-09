import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [isAdmin,setIsAdmin] = useState(false) 
  const userId = sessionStorage.getItem("id");
  
  useEffect(() => {
    const fetchUserData = async() => {
        try {
  
          const res = await axios.get(
            `https://localhost:7026/api/Profile/${userId}`   
          );
          setUserData(res.data.data);
          setIsAdmin(sessionStorage.getItem('IsAdmin'))
          
          // console.log('Response',res.data.data);
          // console.log('isAdmin',isAdmin)
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
    };
    fetchUserData();
  }, [userId, isAdmin]);

  return (
    <div className="h-screen container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">Your Profile</h1>
      <div
        className="bg-white p-8 rounded-lg shadow-md mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {isAdmin==='true'?"Brand":"Admin"}
          </label>
          <p id="name" className="text-gray-900">
            {isAdmin==='true'?userData.brand:userData.admin}
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <p id="name" className="text-gray-900">
            {userData.name}
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {isAdmin==='true'?'Email':'Plan'}
          </label>
          <p id="email" className="text-gray-900">
            {isAdmin==='true'?userData.email:userData.plan||"NA"}
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number
          </label>
          <p id="phoneNumber" className="text-gray-900">
            {userData.phone}
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Role
          </label>
          <p id="address" className="text-gray-900">
            {userData.isAdmin?'Admin':'Member'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
