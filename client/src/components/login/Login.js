import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logo.png';

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const [inpval, setInpval] = useState({
    email: '',
    password: '',
  });
  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('usersdatatoken');
    if (token) {
      setTimeout(() => {
        history('/dash');
      }, 2000); // delay for 2 seconds
    }
  }, [history]);

  const setVal = (e) => {
    const { name, value } = e.target;
    setInpval((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const loginuser = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === '') {
      toast.error('Email is required!', {
        position: 'top-center',
      });
    } else if (!email.includes('@')) {
      toast.warning('Includes @ in your email!', {
        position: 'top-center',
      });
    } else if (password === '') {
      toast.error('Password is required!', {
        position: 'top-center',
      });
    } else if (password.length < 6) {
      toast.error('Password must be at least 6 characters!', {
        position: 'top-center',
      });
    } else {
      const data = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const res = await data.json();

      if (res.status === 201) {
        localStorage.setItem('usersdatatoken', res.result.token);
        history('/dash');
        setInpval({ ...inpval, email: '', password: '' });
      }
    }
  };

  return (
    <section className="flex justify-center bg-customColor items-center h-screen">
      <div className="w-96 bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <img src={logo} alt="" className="mx-auto w-14 h-14 rounded-lg animate-bounce" />
          <h5 className="text-lg text-customColorTwo font-bold mt-4">Welcome!</h5>
          <p className="text-sm text-gray-600 mt-2">
            Please enter your email to continue.
          </p>
        </div>
        <form className="mt-6">
          <div>
            <input
              id="email"
              name="email"
              type="email"
              value={inpval.email}
              onChange={setVal}
              placeholder="Enter Your Email Address"
              required
              autoFocus
              className="w-full border border-gray-300 rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mt-4">
            <input
              id="password"
              name="password"
              type={passShow ? 'text' : 'password'}
              value={inpval.password}
              onChange={setVal}
              placeholder="Enter Your Password"
              required
              className="w-full border border-gray-300 rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-xs text-right mt-1">
              <a href="/forgotps" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </p>
          </div>
          <button
            type="submit"
            onClick={loginuser}
            className="w-full bg-customColorTwo text-white rounded-md py-2 mt-6 hover:bg-customColor transition-colors duration-300"
          >
            Sign In
          </button>
          <p className="text-sm text-center mt-4">
            Don't have an Account?{' '}
            <NavLink to="/register" className="text-customColorTwo font-bold hover:underline">
              Sign Up
            </NavLink>
          </p>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
