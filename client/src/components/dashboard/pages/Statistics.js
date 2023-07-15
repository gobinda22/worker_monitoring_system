import React, { useState } from "react";
import ChartFour from "../charts/ChartFour";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";

const Statistics = () => {
  // Dummy statistic data
  const statistics = [
    {
      label: "Total Workers",
      value: 25,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nisl odio. In id mollis augue.",
    },
    {
      label: "Total Tasks",
      value: 150,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nisl odio. In id mollis augue.",
    },
    {
      label: "Completed Tasks",
      value: 120,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nisl odio. In id mollis augue.",
    },
    {
      label: "Pending Tasks",
      value: 30,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nisl odio. In id mollis augue.",
    },
    {
      label: "Average Tasks per Worker",
      value: 6,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nisl odio. In id mollis augue.",
    },
    {
      label: "Tasks Overdue",
      value: 5,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nisl odio. In id mollis augue.",
    },
    {
      label: "Tasks Completed on Time",
      value: 115,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nisl odio. In id mollis augue.",
    },
    // Add more statistics data...
  ];

  // Date filter state
  const [dateFilter, setDateFilter] = useState("today");
  const [selectedStatistic, setSelectedStatistic] = useState(null);

  // Filtered statistics based on the selected date filter
  const filteredStatistics = () => {
    if (dateFilter === "today") {
      return statistics;
    } else if (dateFilter === "month") {
      // Calculate statistics for the current month
      // Replace this with your actual logic to filter data by month
      return statistics;
    } else if (dateFilter === "week") {
      // Calculate statistics for the current week
      // Replace this with your actual logic to filter data by week
      return statistics;
    }
  };

  return (
    <div className="p-6 ml-60 mt-14">
      <Navbar />
      <Sidebar />
      <h1 className="text-2xl font-semibold mb-4">Statistics</h1>
      <div className="mb-6">
        <label htmlFor="dateFilter" className="mr-2 font-semibold">
          Date Filter:
        </label>
        <select
          id="dateFilter"
          className="border border-gray-300 rounded-md p-2"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        >
          <option value="today">Today</option>
          <option value="month">This Month</option>
          <option value="week">This Week</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredStatistics().map((statistic, index) => (
          <div
            key={index}
            className={`${
              selectedStatistic === index ? "bg-customColorThree" : "bg-white"
            } rounded-lg shadow-lg p-6 cursor-pointer`}
            onClick={() => setSelectedStatistic(index)}
          >
            <h2 className="text-xl font-semibold mb-2">{statistic.label}</h2>
            <p className="text-gray-800">{statistic.value}</p>
          </div>
        ))}
      </div>
      {selectedStatistic !== null && (
        <div className="bg-customColor rounded-lg shadow-lg text-white p-6 mt-6">
          <h2 className="text-xl text-white font-semibold mb-2">
            {filteredStatistics()[selectedStatistic].label}
          </h2>
          <p className="text-white">
            {filteredStatistics()[selectedStatistic].value}
          </p>
          <p className="text-white">
            {filteredStatistics()[selectedStatistic].details}
          </p>
        </div>
      )}
       <h2 className="text-2xl text-black font-semibold p-4">Total work hours</h2>
      <ChartFour />
    </div>
  );
};

export default Statistics;
