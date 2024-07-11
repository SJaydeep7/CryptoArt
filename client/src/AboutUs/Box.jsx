import PropTypes from "prop-types";
import React from "react";

import "./box2.css";

 const Box = ({
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
      
        <div className={`newcard1 ${className}`}>
            <div className="frame">
                <div className="div-wrapper">
                  
                </div>
                <div className="div">
                    <div className="text-wrapper-2">Welcome to CryptoArt , your premier destination for exploring a captivating collection of crypto-related images that blend artistry with the innovation of the blockchain world. Our gallery showcases a diverse range of visual interpretations that capture the essence of cryptocurrency, blockchain technology, and the exciting world of digital assets.</div>
                  
                </div>
            </div>
            <div className="frame-2">
                <div className="frame-3">
                    <div className="basic">• Our Vision</div>
                </div>
                <div className="frame-3">
                    <p className="p">At CryptoArt Gallery, we envision bridging the gap between technology and creativity. Our aim is to provide a platform where artists, enthusiasts, and curious minds can come together to appreciate and explore the fusion of art and crypto. We believe that each image holds a story and a unique perspective, making it an essential part of the broader narrative of the digital revolution.</p>
                </div>
                <div className="frame-3">
                    <div className="basic">• Explore and Engage</div>
                </div>
                <div className="frame-3">
                    <p className="p">We encourage you to take your time as you explore our gallery. Each image has a story to tell, a vision to share, and a connection to make. Engage with the images, allow them to spark conversations, and ponder the intersection of art and technology. Whether you're looking for a conversation starter, a piece to enhance your space, or simply to appreciate the creativity of the crypto world, you're in the right place.</p>
                </div>
                <div className="frame-3">
                    <div className="basic">• Join the Conversation</div>
                </div>
                <div className="frame-3">
                    <p className="p">
                    CryptoArt Gallery is more than just a collection of images; it's a community of like-minded individuals who appreciate the power of creativity and technology. Join the conversation on our social media platforms, share your thoughts, and connect with fellow enthusiasts. We look forward to building a vibrant community that celebrates the fusion of art and crypto.
                    </p>
                </div>
                
            </div>
           

        
         
        </div>
      
    );
};

Box.propTypes = {
    vector: PropTypes.string,
    img: PropTypes.string,
    vector1: PropTypes.string,
    vector2: PropTypes.string,
    vector3: PropTypes.string,
};


export default Box;
