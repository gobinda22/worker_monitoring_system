import React from "react";
import { useLocation } from "react-router-dom";
import CardOne from "./dashboard/cards/CardOne";
import CardTwo from "./dashboard/cards/CardTwo";
import CardThree from "./dashboard/cards/CardThree";
import CardFour from "./dashboard/cards/CardFour";
import ChartOne from "./dashboard/charts/ChartOne";
import ChartTwo from "./dashboard/charts/ChartTwo";
import ChartThree from "./dashboard/charts/ChartThree";
import ChartFive from "./dashboard/charts/ChartFive";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import UpdatingComponent from "./dashboard/updatingcomponent/UpdatingComponent";

const Dashboard = () => {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/dash";

  return (
    <div className=" min-h-screen ml-60 mt-14">
      <div className="flex">
        <Navbar />
        <Sidebar />
        <div className="flex-grow ">
          {/* Content Area */}
          {isDashboardPage && (
            <div className="bg-gray-200 rounded-lg  p-6">
              <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-4">
                <CardOne />
                <CardTwo />
                <CardThree />
                <CardFour />
              </div>
              {/* Render the chart component */}
              <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 mb-6">
                <ChartOne />
                <ChartTwo />
                <ChartThree />
                <ChartFive />
              </div>

              <UpdatingComponent />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
