import React from "react";
import "./password.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [resetRequested, setResetRequested] = useState(false);
    const handleResetPassword = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/forgot-password", { email });
            console.log("Email sent successfully:", response.data);
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };
    return (
        <div className="forgot-password">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="overlap-group">
                        <h1 className="text-wrapper">No Worries.!!</h1>
                    </div>
                    <div className="overlap-group-2">
                        <div className="ellipse" />
                        <div className="ellipse-2" />
                        <div className="frame-wrapper">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="upper-section">
                                        <div className="login-text">
                                            <div className="text-wrapper-2">Forgot Password ?</div>
                                            <div className="text-wrapper-3">Please enter your email</div>
                                        </div>
                                        <div className="credentials">
                                            <div className="username">
                                                <input
                                                    type="email"
                                                    className="text-wrapper-41"
                                                    placeholder="example@mail.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="login-bt-fp">
                                                <button className="login" onClick={handleResetPassword}> Reset Password                                              </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="frame-4">
                                    <div className="div-wrapper">
                                        <Link to="/contactus">
                                            <div className="text-wrapper-6"><u>Customer Care</u></div>
                                        </Link>
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
