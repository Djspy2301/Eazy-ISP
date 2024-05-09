import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  const logout=()=>{
    sessionStorage.setItem('')
  }
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold">Dashboard</div>
        <div className="flex space-x-4">
          <NavLink
            to="/user/plans"
            className={({isActive})=>
            `text-white hover:text-blue-300 ${isActive?"text-blue-300" : "text-white"} transition-colors duration-300`
            }
          >
            Plans
          </NavLink>
          <NavLink
            to="/user/subscription"
            NavLink
            className={({isActive})=>
            `text-white hover:text-green-300 ${isActive?"text-green-300" : "text-white"} transition-colors duration-300`
          }
          >
            Subscription
          </NavLink>
          <NavLink
            to="/user/report"
            className={({isActive})=>
            `text-white hover:text-green-300 ${isActive?"text-purple-300" : "text-white"} transition-colors duration-300`
            }
          >
            Report Issue
          </NavLink>
          <NavLink
            to="/user/profile"
            className={({isActive})=>
            `text-white hover:text-green-300 ${isActive?"text-red-300" : "text-white"} transition-colors duration-300`}
          >
            Profile
          </NavLink>
          <NavLink
            to="/"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
            onClick={logout}
          >
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;