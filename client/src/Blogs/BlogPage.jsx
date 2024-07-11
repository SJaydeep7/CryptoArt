import React from "react";

import "./blog.css";

const BlogPage = () => {
    return (
        <div className="blog-page">
            <div className="div">
                <div className="overlap">
                    <div className="newcard">
                        <div className="newcard-2">
                            <div className="newcard-3">
                            <a href="https://www.coinbase.com/learn/crypto-basics/what-is-cryptocurrency">
                                <div className="newcard-element">
                                   
                                    <div className="text-wrapper-2">Cryptocurrency </div>
                                    <p className="lorem-ipsum-dolor">

                                        <span className="text-wrapper-3">
                                           What is Cryptocurrency? How it is valuable in future? Know in Details. 
                                        </span>
                                    </p>
                                    <img className="img-2" alt="Notifications" src={require("./Images/crypto1.jpg")} />
                                </div>
                                </a>
                                <a href="https://www.coinbase.com/learn/crypto-basics/what-is-bitcoin">
                                <div className="newcard-element">
                                    <div className="text-wrapper-2">Bitcoin </div>
                                    <p className="lorem-ipsum-dolor">

                                        <span className="text-wrapper-3">
                                           What is Bitcoin? Why it is so popular nowdays? Know in Details. 
                                        </span>
                                    </p>
                                    <img className="img-2" alt="Notifications" src={require("./Images/bitcoin.jpg")} />
                                </div>
                                </a>
                                <a href = "https://www.coinbase.com/learn/crypto-basics/what-is-ethereum">
                                <div className="newcard-element">
                                    <div className="text-wrapper-2">Ethereum </div>
                                    <p className="lorem-ipsum-dolor">

                                        <span className="text-wrapper-3">
                                           What is Ethereum? What is its current price? Know in Details. 
                                        </span>
                                    </p>
                                    <img className="img-2" alt="Notifications" src={require("./Images/ethereum.jpg")} />
                                </div>
                                </a>
                                
                                
                        
                                
                            </div>
                        </div>
                    </div>
                 
                    <h1 className="h12">Crypto Blogs</h1>
                    <p className="p">Discover The Latest News About Cryptocurrency and WEB 3.0 with This Blogs</p>
                </div>
               
            </div>
        </div>
    );
};

export default BlogPage;
