import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Error = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 ml-60 mt-4 flex flex-col justify-center items-center">
      <Navbar />
      <Sidebar />
      <img src="/404.svg" alt="error" className="w-64 mb-8" />
      <h2 className="text-2xl font-semibold mb-4">PAGE NOT FOUND</h2>
      <NavLink
        to="/dash"
        className="bg-blue-500 text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-blue-600"
        style={{ fontSize: 18 }}
      >
        Back To Home Page
      </NavLink>
    </div>
  );
};

export default Error;
