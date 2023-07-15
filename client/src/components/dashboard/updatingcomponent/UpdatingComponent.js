import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const UpdatingComponent = () => {
  const [data, setData] = useState([
    "Washer 1: Running",
    "Dryer 3: Idle",
    "Washer 2: Error - Door Open",
    "Dryer 1: Running",
    "Washer 3: Idle",
    "Dryer 2: Running",
    "Washer 4: Running",
    "Dryer 4: Idle",
    "Washer 5: Idle",
    "Dryer 5: Running",
    "Washer 6: Running",
    "Dryer 6: Error - Overheating",
    "Washer 7: Idle",
    "Dryer 7: Running",
    "Washer 8: Error - Low Water Level",
    "Dryer 8: Idle",
    "Washer 9: Running",
    "Dryer 9: Idle",
    "Washer 10: Idle",
    "Dryer 10: Running",
    // Add more data here...
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => [...prevData.slice(1), prevData[0]]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-customColorOne rounded-lg shadow-lg p-6">
      <div className="overflow-hidden">
        <ul className="list-none p-0 m-0">
          {data.slice(0, 5).map((item, index) => (
            <CSSTransition
              key={index}
              in={true}
              appear={true}
              timeout={500}
              classNames="fade-slide"
            >
              <li className="text-white text-base font-medium mb-2">{item}</li>
            </CSSTransition>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpdatingComponent;
