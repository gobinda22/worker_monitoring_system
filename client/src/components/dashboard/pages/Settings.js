import React from "react";
import { FaCog, FaVolumeUp, FaMoon, FaLanguage } from "react-icons/fa";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";

const Settings = () => {
  return (
    <div className="p-6 ml-60 mt-14">
      <Navbar />
      <Sidebar />
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">General</h2>
          <div className="flex items-center">
            <FaCog className="mr-2" />
            <span>General Settings</span>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Sound</h2>
          <div className="flex items-center">
            <FaVolumeUp className="mr-2" />
            <span>Sound Settings</span>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Language</h2>
          <div className="flex items-center">
            <FaLanguage className="mr-2" />
            <span>Language Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
