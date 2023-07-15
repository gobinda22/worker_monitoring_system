import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("********");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform save logic here
    setIsEditing(false);
  };

  const handleLogoutClick = () => {
    // Perform logout logic here
    console.log("Logged out");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          {isEditing ? (
            <input
              type="text"
              id="firstName"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          ) : (
            <p>{firstName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          {isEditing ? (
            <input
              type="text"
              id="lastName"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          ) : (
            <p>{lastName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          {isEditing ? (
            <input
              type="email"
              id="email"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <p>{email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          {isEditing ? (
            <input
              type="password"
              id="password"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          ) : (
            <p>{password}</p>
          )}
        </div>
        {isEditing ? (
          <button
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mr-2"
            onClick={handleSaveClick}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mr-2"
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}
        <button
          className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md"
          onClick={handleLogoutClick}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
