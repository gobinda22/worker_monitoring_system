import React, { useContext } from 'react';
import { LoginContext } from './ContextProvider/Context';
import { useNavigate, NavLink } from 'react-router-dom';

const Header = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  const history = useNavigate();

  const logoutuser = async () => {
    let token = localStorage.getItem('usersdatatoken');

    const res = await fetch('/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
        Accept: 'application/json'
      },
      credentials: 'include'
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 201) {
      console.log('user logout');
      localStorage.removeItem('usersdatatoken');
      setLoginData(false);
      history('/');
    } else {
      console.log('error');
    }
  };

  const goError = () => {
    history('*');
  };

  return (
    <>
      <div style={{ background: 'black', color: 'white', padding: '10px' }}>
        <NavLink to="/" style={{ fontSize: '20px', fontWeight: 'bold', textDecoration: 'none' }}>
          HOME
        </NavLink>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          {logindata.ValidUserOne ? (
            <div
              style={{
                background: 'salmon',
                fontWeight: 'bold',
                textTransform: 'capitalize',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: '10px'
              }}
              onClick={() => {
                // handle user profile click
              }}
            >
              {logindata.ValidUserOne.fname[0].toUpperCase()}
            </div>
          ) : (
            <div
              style={{
                background: 'blue',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                cursor: 'pointer',
                marginLeft: '10px'
              }}
              onClick={() => {
                // handle avatar click
              }}
            ></div>
          )}

          <div style={{ marginLeft: '10px', cursor: 'pointer' }}>
            {logindata.ValidUserOne ? (
              <div
                style={{ textDecoration: 'underline', color: 'white' }}
                onClick={() => {
                  logoutuser();
                }}
              >
                Logout
              </div>
            ) : (
              <div
                style={{ textDecoration: 'underline', color: 'white' }}
                onClick={() => {
                  goError();
                }}
              >
                Profile
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
