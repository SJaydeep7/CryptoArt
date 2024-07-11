import PropTypes from "prop-types";
import React from "react";
import Twitter from "./Twitter.png";
import  Instagram  from "./Instagram.png";

import "./box3.css";

 const Box3 = ({
    className,
    vector = "Vector1.png",
    img = "image.svg",
    vectorClassName,
    vector1 = "Vector1.png",
    vectorClassNameOverride,
    vector2 = "Vector1.png",
    imgClassName,
    vector3 = "Vector1.png",
    frameClassName,
}) => {
    return (
      
        <div className={`newcard3 ${className}`}>
            <div className="frame">
                <div className="div-wrapper">
                  
                </div>
                <div className="div">
                    <div className="text-wrapper-2">We're delighted to assist you with any inquiries, feedback, or concerns you may have regarding CryptoArt Gallery. Our dedicated support team is here to ensure you have a seamless experience. Please feel free to reach out to us through the following contact options:</div>
                  
                </div>
            </div>
            <div className="frame-2">
                <div className="frame-3">
                    <div className="basic">• Customer Support Email</div>
                </div>
                <div className="frame-3">
                    <p className="p">For general inquiries and assistance, you can contact our support team at <u>support@cryptoartgallery.com</u> We strive to respond to all emails within 24 hours during business days.</p>
                </div>
                <div className="frame-3">
                    <div className="basic">• Social Media</div>
                </div>
                <div className="frame-3">
                    <p className="p">Stay connected and engaged with us through our social media channels. Follow us on Twitter    <img src={Twitter} className="mylogo"/> and Instagram  <img src={Instagram} className="mylogo"/> for updates, news, and community discussions.</p>
                </div>
                <div className="frame-3">
                    <div className="basic">• Business Inquiries</div>
                </div>
                <div className="frame-3">
                    <p className="p">
                    For partnership opportunities, collaborations, or business-related inquiries, please reach out to our business development team at <u>business@cryptoartgallery.com</u>
                    </p>
                </div>
                <br/>
                <div className="div">
                    <div className="text-wrapper-2">We look forward to hearing from you and assisting you in any way we can. Your engagement is essential to us, and we're here to make your experience with CryptoArt Gallery memorable and enjoyable.Thank you for being a part of our creative and vibrant community!</div>
                  
                </div>
              
                
            </div>
           

        
         
        </div>
      
    );
};

Box3.propTypes = {
    vector: PropTypes.string,
    img: PropTypes.string,
    vector1: PropTypes.string,
    vector2: PropTypes.string,
    vector3: PropTypes.string,
};


export default Box3;
