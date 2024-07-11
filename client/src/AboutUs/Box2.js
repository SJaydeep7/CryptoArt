import PropTypes from "prop-types";
import React from "react";

import "./box.css";

 const Box2 = ({
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
      
        <div className={`newcard2 ${className}`}>
            <div className="frame">
                <div className="div-wrapper">
                  
                </div>
                <div className="div">
                    <div className="text-wrapper-2">Welcome to CryptoArt Gallery. These Terms and Conditions govern your use of our website. By accessing and using our website, you agree to comply with these terms. Please read them carefully before using our services.</div>
                  
                </div>
            </div>
            <div className="frame-2">
                <div className="frame-3">
                    <div className="newbasic">• Acceptance of Terms</div>
                </div>
                <div className="frame-3">
                    <p className="p">By accessing or using CryptoArt , you acknowledge that you have read, understood, and agree to these Terms and Conditions. If you do not agree with these terms, please do not use our website.</p>
                </div>
                <div className="frame-3">
                    <div className="newbasic">• Ownership</div>
                </div>
                <div className="frame-3">
                    <p className="p">The content on CryptoArt, including images, text, graphics, and logos, is protected by copyright and other intellectual property laws. You may not use, reproduce, distribute, or create derivative works based on our content without our explicit consent.</p>
                </div>
                <div className="frame-3">
                    <div className="newbasic">• Privacy Policy</div>
                </div>
                <div className="frame-3">
                    <p className="p">
                  We collect and process personal information in accordance with our Privacy Policy. By using our website, you consent to the collection and use of your information as described in our Privacy Policy.
                    </p>
                </div>
                
                <div className="frame-3">
                    <div className="newbasic">• Modifications to Terms</div>
                </div>
                <div className="frame-3">
                    <p className="p">
                    We reserve the right to modify or update these Terms and Conditions at any time. Changes will be effective upon posting to our website. Your continued use of our website after any such changes indicates your acceptance of the modified Terms and Conditions.
                    </p>
                </div>

                <div className="frame-3">
                    <div className="newbasic">• Accuracy of Information</div>
                </div>
                <div className="frame-3">
                    <p className="p">
                    While we strive to provide accurate and up-to-date information, we do not guarantee the accuracy, completeness, or reliability of the content on our website.
                    </p>
                </div>

                <div className="frame-3">
                    <div className="newbasic">• Third-Party Links</div>
                </div>
                <div className="frame-3">
                    <p className="p">
                    Our website may contain links to third-party websites. We do not endorse or assume responsibility for the content or practices of these third-party sites. Your use of such sites is at your own risk.
                    </p>
                </div>
                
            </div>
           
            <div className="div">
                    <div className="text-wrapper-2">Thank you for using CryptoArt Gallery. Enjoy your experience!</div>
                  
                </div>
        
         
        </div>
      
    );
};

Box2.propTypes = {
    vector: PropTypes.string,
    img: PropTypes.string,
    vector1: PropTypes.string,
    vector2: PropTypes.string,
    vector3: PropTypes.string,
};


export default Box2;
