import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./password.css"; // Import your CSS file

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [token, setToken] = useState("");
    const location = useLocation();
  
    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const tokenParam = searchParams.get("token");
      if (tokenParam) {
        setToken(tokenParam);
      }
    }, [location.search]);
  
    const handlePasswordReset = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/reset-password", {
          token,
          newPassword,
        });
        console.log("Password reset successful:", response.data.message);
      } catch (error) {
        console.error("Error resetting password:", error);

      }
    };
  
    return (
        <div className="forgot-password">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="overlap-group">
                        <h1 className="text-wrapper">Reset Your Password</h1>
                    </div>
                    <div className="overlap-group-2">
                        <div className="ellipse" />
                        <div className="ellipse-2" />
                        <div className="frame-wrapper">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="upper-section">
                                        <div className="login-text">
                                            <div className="text-wrapper-2">Choose a New Password</div> {/* Update text */}
                                            <div className="text-wrapper-3">Enter your new password below.</div> {/* Update text */}
                                        </div>
                                        <div className="credentials">
                                            <div className="username">
                                                <input
                                                    type="password"
                                                    className="text-wrapper-41"
                                                    placeholder="New Password"
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                />
                                            </div>
                                            <div className="login-bt-fp">
                                                <div className="login" onClick={handlePasswordReset}>
                                                    <div className="text-wrapper-5">Reset Password</div>
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
        </div>
    );
};

export default ResetPassword;
