import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  // ...rest of the options remain the same
};

const ChartFive = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Alerts",
        data: [8, 12, 10, 9, 11, 13, 10, 8, 9, 12, 11],
      },
    ],
  });

  const handleFilter = (filter) => {
    let filteredData = [];

    switch (filter) {
      case "daily":
        filteredData = [8, 12, 10, 9, 11, 13, 10, 8, 9, 12, 11];
        break;
      case "weekly":
        filteredData = [10, 9, 11, 13, 10, 8, 9, 12, 11, 8, 12];
        break;
      case "monthly":
        filteredData = [9, 11, 13, 10, 8, 9, 12, 11, 8, 12, 10];
        break;
      case "yearly":
        filteredData = [11, 13, 10, 8, 9, 12, 11, 8, 12, 10, 9];
        break;
      default:
        break;
    }

    setState({ series: [{ name: "Alerts", data: filteredData }] });
  };

  return (
    <div className="col-span-12 rounded-lg border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-md dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-7">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <div className="w-full mt-4">
              <p className="font-semibold text-primary">Anomaly Alerts</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-white p-2.5 dark:bg-boxdark">
            <button
              className="rounded bg-blue-500 py-1 px-3 mx-2 text-xs font-medium text-black shadow-card hover:bg-customColor hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark"
              onClick={() => handleFilter("daily")}
            >
              Day
            </button>
            <button
              className="rounded bg-blue-500 py-1 px-3 mx-2 text-xs font-medium text-black hover:bg-customColor hover:shadow-card dark:text-white dark:hover:bg-boxdark"
              onClick={() => handleFilter("weekly")}
            >
              Week
            </button>
            <button
              className="rounded bg-blue-500 py-1 px-3 mx-2 text-xs font-medium text-black hover:bg-customColor hover:shadow-card dark:text-white dark:hover:bg-boxdark"
              onClick={() => handleFilter("monthly")}
            >
              Month
            </button>
            <button
              className="rounded bg-blue-500 py-1 px-3 mx-2 text-xs font-medium text-black hover:bg-customColor hover:shadow-card dark:text-white dark:hover:bg-boxdark"
              onClick={() => handleFilter("yearly")}
            >
              Year
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartFive" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartFive;
