import {React, useEffect, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginContext } from "./components/ContextProvider/Context";

import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Dashboard from "./components/Dashboard";
import Employees from "./components/dashboard/pages/Employees";
import Statistics from "./components/dashboard/pages/Statistics";
import Settings from "./components/dashboard/pages/Settings";
import Error from "./components/Error";
import Alerts from "./components/dashboard/pages/Alerts";
import LiveVideoFeed from "./components/dashboard/pages/live-video-page/LiveVideoFeed";
import ForgotPassword from "./components/login/ForgotPassword"
function App() {
  const [data, setData] = useState(false);
  const { setLoginData } = useContext(LoginContext);

  useEffect(() => {
    const DashboardValid = async () => {
      let token = localStorage.getItem("usersdatatoken");

      const res = await fetch("/validuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      const data = await res.json();

      if (data.status === 401 || !data) {
        console.log("user not valid");
      } else {
        console.log("user verified");
        setLoginData(data);
      }
    };

    const fetchData = async () => {
      await DashboardValid();
      setData(true);
    };

    fetchData();
  }, [setLoginData]);

  return (
    <>
      {data ? (
        <>
          
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotps" element={<ForgotPassword />} />
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/live-video-feed" element={<LiveVideoFeed />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      ) : (
        <div className="flex justify-center ml-60 mt-8 items-center h-screen">
          Loading...
        </div>
      )}
    </>
  );
}

export default App;
