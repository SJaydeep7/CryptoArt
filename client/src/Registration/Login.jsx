import React from 'react';
import "./styles.css";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const Login = () => {

  const history = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = 'http://localhost:5000/api/login';
      const response = await axios.post(url, userData);
      const tokenFromServer = response.data.token;
      localStorage.setItem('token', tokenFromServer);
      const checkRoleResponse = await axios.post('http://localhost:5000/api/check-role', {}, {
        headers: { Authorization: tokenFromServer }
      });
      const redirectPath = checkRoleResponse.data.redirect;
      console.log('Response from server:', response);
      setIsRedirecting(true);
      setTimeout(() => {
        setIsRedirecting(false);
        history(redirectPath);
      }, 2000);
    } catch (error) {
      console.error('Error Login: ', error);
      if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid username or password');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };
  return (
    <div className="container">
      <div className="login">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="overlap-group">
              <h1 className="text-wrapper">Welcome Back .!</h1>

              <div className="ellipse" />
              <div className="div" />
              <div className="frame-wrapper">
                <div className="frame-2">
                  <div className="frame-3">
                    <div className="upper-section">
                      <div className="login-text">
                        <div className="text-wrapper-2">Login</div>
                        <div className="text-wrapper-3">Glad you're back.!</div>
                      </div>
                      <div className="credentials">
                        <div className="username">
                          <input type="text" className="text-wrapper-9" placeholder='Username' name="username" value={userData.username} onChange={handleChange} />
                        </div>
                        <div className="password-rem">
                          <div className="password">
                            <input className="text-wrapper-9" type="password" placeholder='Password' name='password' value={userData.password} onChange={handleChange} />
                            <img className="img" alt="Closed eye" src={require("./Images/ClosedEyes.png")} />
                          </div>
                        </div>
                        <div className="login-bt-fp">
                          <div className="div-wrapper">
                            <button className="text-wrapper-11" onClick={handleSubmit}>Login</button>
                          </div>
                          <div>
                            {errorMessage && <div className="error-message">{errorMessage}</div>}
                          </div>
                          <div className="text-wrapper-3"><Link to="/forgotpassword" className="text-wrapper-3">Forgot password ?</Link></div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-5">
                      <p className="text-wrapper-5"><Link className="text-wrapper-5" to="/user/signup"> Don't have an account ? Signup</Link></p>
                      <div className="customer-care">
                        <div className="frame-6">
                          <div className="text-wrapper-8">Terms &amp; Conditions</div>
                        </div>
                        <div className="frame-6">
                          <div className="text-wrapper-8">Support</div>
                        </div>
                        <div className="frame-6">
                          <div className="text-wrapper-8">Customer Care</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img className="line-2" alt="Line" src={require("./Images/Line.png")} />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;