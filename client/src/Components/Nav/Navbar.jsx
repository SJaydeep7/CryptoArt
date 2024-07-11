import React, { useState } from "react";
import styles from "./Nav.module.css";
import Button from "../Elements/Button/Button";
import { HambergerMenu } from "iconsax-react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "./Logo.png";

const Navbar = (props) => {
  const token = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState(token !== null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <>
      <nav className={`${styles.nav} flex align-items-center`}>
        <img src={Logo} className={`${styles["logo"]}`} />
        <ul className={`flex align-items-center ${styles["navbar-nav"]}`}>
        {loggedIn && (
          <Link to="/">
            <li className={`${styles["nav-item"]} ${styles}`}>
              <a href="" className={styles["nav-link"]}>
                Home
              </a>
            </li>
          </Link>
        )}
          {loggedIn && (
            <Link to="/user/wallpapers">
              <li className={`${styles["nav-item"]} ${styles}`}>
                <a to={"/user/wallpapers"} className={styles["nav-link"]}>
                  Wallpapers
                </a>
              </li>
            </Link>
          )}
          {loggedIn && (
          <Link to="/purchase">
            <li className={styles["nav-item"]}>
              <a href="" className={styles["nav-link"]}>
                Purchase
              </a>
            </li>
          </Link>
          )}
          {loggedIn && (
          <Link to="/faq">
            <li className={styles["nav-item"]}>
              <a href="" className={styles["nav-link"]}>
                FAQ
              </a>
            </li>
          </Link>
          )}
          {loggedIn && (
          <Link to="/blogs">
            <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
              <a href="" className={styles["nav-link"]}>
                Blog
              </a>
            </li>
          </Link>
          )}
          {loggedIn && (
          <Link to="/about">
            <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
              <a href="" className={styles["nav-link"]}>
                About Us
              </a>
            </li>
          </Link>
        )}
        </ul>
        <div className={`flex ${styles["navbar-buttons"]}`}>
          {loggedIn ? (
            <Button theme="matrix" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button theme="matrix">Join</Button>
            </Link>
          )}
        </div>
        <div className={styles["navbar-responsive-menu"]}>
          <Button theme="transparent">
            <HambergerMenu size="32" color="var(--white-100)" />
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
