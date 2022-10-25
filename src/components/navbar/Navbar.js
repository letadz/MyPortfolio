import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import Logo from "../../assets/logo/64px.png";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="navbar-content">
          <div className="logo-container">
            <a href="/#">
              <img src={Logo} alt="Logo" />
            </a>
          </div>

          {/* MOBILE NAVBAR */}
          <div className="mobile-menu">
            {toggle ? (
              <HiOutlineX
                color="#020202"
                size={40}
                onClick={() => setToggle(false)}
              />
            ) : (
              <HiMenuAlt3
                color="#020202"
                size={40}
                onClick={() => setToggle(true)}
              />
            )}
            {toggle && (
              <div className="mobile-list">
                <ul className="nav-items">
                  <li className="nav-item">
                    <a href="/#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a href="#aboutme">About</a>
                  </li>
                  <li className="nav-item">
                    <a href="#project">Projects</a>
                  </li>
                </ul>

                <a href="#contact" role="button" className="btn-contact">
                  <button>Contact</button>
                </a>
              </div>
            )}
          </div>

          {/* PC NAVBAR */}
          <div className="nav-list">
            <ul className="nav-items">
              <li className="nav-item">
                <a href="/#">Home</a>
              </li>
              <li className="nav-item">
                <a href="#aboutme">About</a>
              </li>
              <li className="nav-item">
                <a href="#project">Projects</a>
              </li>
            </ul>

            <a href="#contact" role="button" className="btn-contact">
              <button>Contact</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
