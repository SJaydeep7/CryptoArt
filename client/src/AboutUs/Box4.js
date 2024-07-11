import PropTypes from "prop-types";
import React from "react";
import Twitter from "./Twitter.png";
import  Instagram  from "./Instagram.png";

import "./box4.css";

 const Box4 = ({
   className
}) => {
    return (
      
        <div className={`newcard4 ${className}`}>
            <div className="frame">
                <div className="div-wrapper">
                  
                </div>
                <div className="div">
                    <div className="text-wrapper-2">Welcome to our FAQ section. Here, we address common questions and provide answers to help you navigate your CryptoArt Gallery experience.</div>
                  
                </div>
            </div>
            <div className="frame-2">
                <div className="frame-3">
                    <div className="basic4">1. What is CryptoArt Gallery?</div>
                </div>
                <div className="frame-3">
                    <p className="p">CryptoArt Gallery is an online platform that showcases a diverse collection of crypto-inspired art. Our gallery features a range of visual interpretations that capture the essence of cryptocurrency, blockchain technology, and the world of digital assets.</p>
                </div>
                <div className="frame-3">
                    <div className="basic4">2. How do I explore the gallery?</div>
                </div>
                <div className="frame-3">
                    <p className="p">Exploring the CryptoArt Gallery is simple. Visit our website and browse through the curated collection of images. You can filter images based on themes, artists, or styles to find pieces that resonate with you.</p>
                </div>
                <div className="frame-3">
                    <div className="basic4">3. How do I engage with the artists?</div>
                </div>
                <div className="frame-3">
                    <p className="p">
                    Each image in our gallery is accompanied by information about the artist. You can often find links to their social media profiles, personal websites, or other platforms where you can connect with them.
                    </p>
                </div>

                <div className="frame-3">
                    <div className="basic4">4. Are the images available for download?</div>
                </div>
                <div className="frame-3">
                    <p className="p">
                    Yes, you can download the images if you have purchased our Subscription plan.The images displayed in the gallery are intended for viewing and appreciation purposes and They are subject to copyright and intellectual property rights. Please respect the artists' work by not using or distributing their images without proper permission.
                    </p>
                </div>

                <div className="frame-3">
                    <div className="basic4">5. How can I submit my artwork to be featured in the gallery?</div>
                </div>
                <div className="frame-3">
                    <p className="p">
                    We are always excited to discover new artists and their creations. If you're an artist interested in having your crypto-inspired artwork considered for inclusion in our gallery, please contact our submissions team at <u>artists@cryptoartgallery.com</u>
                    </p>
                </div>

                <div className="frame-3">
                    <div className="basic4">6. How can I stay updated on new additions to the gallery?</div>
                </div>
                <div className="frame-3">
                    <p className="p">
                    Stay connected and engaged with us through our social media channels. Follow us on Twitter    <img src={Twitter} className="mylogo"/> and Instagram  <img src={Instagram} className="mylogo"/> for updates, news, and community discussions.
                    </p>
                </div>
                
                <br/>
                <div className="div">
                    <div className="text-wrapper-2">If your question isn't answered here, feel free to reach out to our support team via email or social media. We're here to assist you on your crypto art exploration journey!</div>
                  
                </div>
              
                
            </div>
           

        
         
        </div>
      
    );
};

Box4.propTypes = {
    vector: PropTypes.string,
    img: PropTypes.string,
    vector1: PropTypes.string,
    vector2: PropTypes.string,
    vector3: PropTypes.string,
};


export default Box4;
