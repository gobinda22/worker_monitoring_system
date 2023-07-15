import React from 'react';

const Notification = ({ title, type, message }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">Notification:</p>
      <p className={`text-${type}`}>{message}</p>
    </div>
  );
};

export default Notification;
