import PropTypes from "prop-types";
import React from "react";
import { Button } from "./Button";
import "./card.css";
import Vector from "./Vector1.png";

 const Card = ({
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
      
        <div className={`card ${className}`}>
            <div className="frame">
                <div className="div-wrapper">
                    <div className="text-wrapper">₹</div>
                </div>
                <div className="div">
                    <div className="text-wrapper-2">2000</div>
                    <div className="text-wrapper-3">/Lifetime</div>
                </div>
            </div>
            <div className="frame-2">
                <div className="frame-3">
                    <div className="basic">Premium</div>
                </div>
                <div className="frame-3">
                    <p className="p">Purchase Just One Time And Enjoy For Lifetime</p>
                </div>
            </div>
            <div className="frame-2">
                <div className="frame-4">
                    <img className="vector" alt="Vector" src={Vector} />
                    <div className="text-wrapper-4">High-Quality Images</div>
                </div>
                <div className="frame-4">
                    <img className="vector" alt="Vector" src={Vector} />
                    <div className="text-wrapper-4">No Watermark</div>
                </div>

                <div className="frame-4">
                    <img className="vector" alt="Vector" src={Vector}/>
                    <div className="text-wrapper-4">Extensive Image Inventory</div>
                </div>
              
              
            </div>
            <Button className="button-instance" state="default" />
            <div className={`most-popular-wrapper ${frameClassName}`}>
                <div className="most-popular">Only One Time Purchase</div>
            </div>
        </div>
      
    );
};

Card.propTypes = {
    vector: PropTypes.string,
    img: PropTypes.string,
    vector1: PropTypes.string,
    vector2: PropTypes.string,
    vector3: PropTypes.string,
};


export default Card;
