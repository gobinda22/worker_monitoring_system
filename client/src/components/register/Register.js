import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const setVal = (e) => {
    const { name, value } = e.target;

    setInpval((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  };

  const addUserdata = async (e) => {
    e.preventDefault();

    const { fname, email, password, cpassword } = inpval;

    if (fname === "") {
      toast.warning("fname is required!", {
        position: "top-center"
      });
    } else if (email === "") {
      toast.error("email is required!", {
        position: "top-center"
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center"
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center"
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center"
      });
    } else if (cpassword === "") {
      toast.error("cpassword is required!", {
        position: "top-center"
      });
    } else if (cpassword.length < 6) {
      toast.error("confirm password must be 6 char!", {
        position: "top-center"
      });
    } else if (password !== cpassword) {
      toast.error("pass and Cpass are not matching!", {
        position: "top-center"
      });
    } else {
      const data = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, email, password, cpassword
        })
      });

      const res = await data.json();

      if (res.status === 201) {
        toast.success("Registration Successfully done!", {
          position: "top-center"
        });
        setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "" });
      }
    }
  }

  return (
    <section className="flex justify-center bg-customColor items-center h-screen">
      <div className="w-96 bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <h5 className="text-lg font-bold">Sign Up</h5>
        </div>
        <form className="mt-6">
          <div>
            <label htmlFor="fname">Name</label>
            <input
              id="fname"
              name="fname"
              type="text"
              value={inpval.fname}
              onChange={setVal}
              placeholder="Enter Your Name"
              required
              autoFocus
              className="w-full border border-gray-300 rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={inpval.email}
              onChange={setVal}
              placeholder="Enter Your Email Address"
              required
              className="w-full border border-gray-300 rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password">Password</label>
            <div className="flex items-center">
              <input
                id="password"
                name="password"
                type={passShow ? "text" : "password"}
                value={inpval.password}
                onChange={setVal}
                placeholder="Enter Your Password"
                required
                className="w-full border border-gray-300 rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setPassShow(!passShow)}
                className="ml-2 text-blue-500 hover:underline focus:outline-none"
              >
                {passShow ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="cpassword">Confirm Password</label>
            <div className="flex items-center">
              <input
                id="cpassword"
                name="cpassword"
                type={cpassShow ? "text" : "password"}
                value={inpval.cpassword}
                onChange={setVal}
                placeholder="Confirm Password"
                required
                className="w-full border border-gray-300 rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setCPassShow(!cpassShow)}
                className="ml-2 text-blue-500 hover:underline focus:outline-none"
              >
                {cpassShow ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            onClick={addUserdata}
            className="w-full bg-customColorTwo text-white rounded-md py-2 mt-6 hover:bg-customColor transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <NavLink to="/" className="text-customColorTwo font-bold hover:underline">
            Log In
          </NavLink>{" "}
        </p>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Register;
