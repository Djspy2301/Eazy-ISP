import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold">Dashboard</div>
        <div className="flex space-x-4">
          <NavLink
            to="/admin/subscribers"
            className={({isActive})=>
            `text-white hover:text-blue-300 ${isActive?"text-blue-300" : "text-white"} transition-colors duration-300`
            }
          >
            Subscribers
          </NavLink>
          <NavLink
            to="/admin/profile"
            NavLink
            className={({isActive})=>
            `text-white hover:text-green-300 ${isActive?"text-green-300" : "text-white"} transition-colors duration-300`
          }
          >
            Profile
          </NavLink>
          <NavLink
            to="/admin/add-plans"
            className={({isActive})=>
            `text-white hover:text-green-300 ${isActive?"text-purple-300" : "text-white"} transition-colors duration-300`
            }
          >
            Add Plans
          </NavLink>
          <NavLink
            to="/admin/issues"
            className={({isActive})=>
            `text-white hover:text-green-300 ${isActive?"text-red-300" : "text-white"} transition-colors duration-300`}
          >
            Complaints
          </NavLink>
          <NavLink
            to="/"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;