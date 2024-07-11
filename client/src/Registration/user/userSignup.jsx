import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const UserSignup = () => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successfullMessage, setSuccessfullMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const url = 'http://localhost:5000/api/signup/user';
            const response = await axios.post(url, userData);
            const data = response.data;
            console.log(data);
            if (data.response && data.response.status === 201) {
                setSuccessfullMessage('Account Created');
              } 
        } catch (error) {
            console.error('Error signing up:', error);
            if (error.response && error.response.status === 409) {
                setErrorMessage('User Already Exists');
              } else {
                setErrorMessage('An error occurred. Please try again later.');
              }
        }
    };
    return (
        <div className="container">
            <div className="signup">
                <div className="overlap-wrapper">
                    <div className="overlap">
                        <div className="overlap-group">
                            <h1 className="text-wrapper">Welcome To User Signup Page</h1>

                        </div>
                        <div className="overlap-group-2">
                            <div className="ellipse" />
                            <div className="ellipse-2" />
                            <div className="frame-wrapper">
                                <div className="frame-2">
                                    <div className="frame-3">
                                        <div className="upper-section">
                                            <div className="login-text">
                                                <div className="text-wrapper-2">Sign Up</div>
                                                <p className="p">Just some details to get you in.!</p>
                                            </div>
                                            <div className="credentials">
                                                <div className="div-wrapper">
                                                    <input type="text" className="text-wrapper-9" placeholder="Username" name="username" value={userData.username} onChange={handleChange} />
                                                </div>
                                                <div className="div-wrapper">
                                                    <input type="email" className="text-wrapper-9" placeholder="Email" name="email" value={userData.email} onChange={handleChange} />
                                                </div>
                                                <div className="password-rem">
                                                    <div className="div-wrapper">
                                                        <input type="password" className="text-wrapper-9" placeholder="Password" name="password" value={userData.password} onChange={handleChange} />
                                                    </div>
                                                    <div className="div-wrapper">
                                                        <input type="password" className="text-wrapper-9" placeholder="Confirm Password" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="login-bt-fp">
                                                    <div className="login">
                                                        <button type="submit" onClick={handleSubmit}>Signup</button>
                                                    </div>
                                                    {successfullMessage && <div className="success-message">{successfullMessage}</div>}
                                                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="other-logins">
                                            <div className="or">
                                                <img className="line" alt="Line" src={require("./Images/Line1.png")} />
                                                <div className="text-wrapper-7">Or </div>
                                                <img className="line" alt="Line" src={require("./Images/Line1.png")} />
                                            </div>
                                            <div className="newframe">
                                                <img className="img2" alt="Google" src={require("./Images/Google.png")} />
                                                <img className="img2" alt="Github" src={require("./Images/Github.png")} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frame-4">
                                        <div className="text-wrapper-6"><Link to="/login" className="text-wrapper-6"> Already Registered ? Login </Link></div>
                                        <div className="customer-care">
                                            <div className="frame-5">
                                                <div className="text-wrapper-7"><Link to="/terms" className="text-wrapper-6">Terms &amp; Conditions</Link></div>
                                            </div>

                                            <div className="frame-5">
                                                <div className="text-wrapper-7"><Link to="/contactus" className="text-wrapper-6">Customer Care</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSignup;