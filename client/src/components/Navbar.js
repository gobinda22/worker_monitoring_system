import React, { useState } from "react";
import { FaUser, FaBell } from "react-icons/fa";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = currentDate.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleLogout = () => {
    localStorage.removeItem("usersdatatoken"); // Remove the token from local storage
    // setLoginData(null); // Reset the login data
    navigate("/"); // Navigate back to the login screen
  };

  return (
    <nav className="fixed top-0 left-60 right-0 z-10 bg-opacity-70 shadow-xl backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="mr-4">
              {/* Date and Time */}
              <div className="text-black hidden sm:block">
                <span className="font-semibold">{formattedDate}</span>
                <span className="mx-2">|</span>
                <span>{formattedTime}</span>
              </div>
            </div>
            {/* Your logo or branding */}
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              {/* Search bar */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21L15 15M9 9l6 6M15 9l-6 6"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-800 text-gray-100 bg-customColorOne px-10 py-2 rounded-full"
                />
              </div>
            </div>
            <div className="flex items-center">
              {/* User avatar */}
              <div className="mr-4">
                <a href="/profile">
                  <FaUser className="text-gray-400 hover:text-white" />
                </a>
              </div>
              {/* Notifications */}
              <div onClick={handleNotificationClick}>
                <FaBell className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="text-white hover:text-white bg-customColorTwo hover:bg-customColor px-8 py-2 mx-4 rounded-md transition-colors duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        {/* Date and Time (Mobile) */}
        <div className="text-black block sm:hidden mt-2">
          <span className="font-semibold">{formattedDate}</span>
          <span className="mx-2">|</span>
          <span>{formattedTime}</span>
        </div>
      </div>

      {/* Notifications */}
      {showNotifications && (
        <div className="fixed right-4 top-20 z-50">
          <div className="max-w-sm w-full bg-white rounded-lg shadow-lg">
            <div className="p-4">
              {/* Example notifications */}
              <Notification
                title="Alert"
                type="blue-500"
                message="Worker John Doe has exceeded working hours."
              />

              <Notification
                title="Warning"
                type="yellow-500"
                message="Worker Jane Smith is absent today."
              />

              <Notification
                title="Info"
                type="gray-500"
                message="Worker Mark Johnson has completed a task."
              />

              <Notification
                title="Alert"
                type="red-500"
                message="Worker Sarah Thompson has a safety violation."
              />

              <Notification
                title="Notification"
                type="green-500"
                message="Worker Michael Davis has received a commendation."
              />

              <Notification
                title="Reminder"
                type="purple-500"
                message="Worker Emily Wilson has a training session scheduled."
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
