import React from "react";
import ChartOne from "../charts/ChartOne";
import ChartTwo from "../charts/ChartTwo";
import ChartThree from "../charts/ChartThree";
import ChartFive from "../charts/ChartFive";

const Analytics = () => {
  return (
    <div className="bg-gray-200 rounded-lg p-6">
      <h1 className="text-2xl font-semibold mb-4">Analytics</h1>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 mb-6">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <ChartFive />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Analytics;
