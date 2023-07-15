import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setMessage('An email with password reset instructions has been sent to your email address.');
  };

  const handleBackToLogin = () => {
    
    console.log('Navigating back to login...');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              <p>Please enter the email address you used to create your account</p>
              <br/>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email: 
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Reset Password
          </button>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
        <button
          onClick={handleBackToLogin}
          className="mt-6 flex items-center justify-center text-gray-500 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          <a href="/login" className="text-blue-500 hover:underline">
                Back to Login
              </a>
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;