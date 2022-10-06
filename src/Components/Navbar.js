import React, {useState} from "react"
import logo from "../assets/images/logo.png"

// import { useRef,useEffect } from "react"
export default function Navbar() {
  const hamburgerr = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-main-menu")
  const [switchToggled, setSwitchToggled] = useState(false)
  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true)
    if (switchToggled === true) {
      hamburgerr.classList.toggle("active")
      navMenu.classList.toggle("active")
    } else {
      hamburgerr.classList.toggle("active")
      navMenu.classList.toggle("active")
    }
  }

  //this below is the old toggle
  // const toggle = () => {
  //     hamburgerr.classList.toggle("active");
  //     navMenu.classList.toggle("active");

  //  };

  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="links">
          <ul className="nav-up">
            <li>
              <a href="/" className="upLinks">
                SPONSOR
              </a>
            </li>
            <li>
              <a href="/" className="upLinks">
                REGISTER
              </a>
            </li>
          </ul>

          <ul className="nav-main-menu">
            <li className="nav-item">
              <a href="/" className="nav-link">
                CONFERENCE
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                EXHIBITION
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                ATTEND
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                PRESS
              </a>
            </li>
          </ul>
        </div>
        <div id="hamburger" className="hamburger" onClick={ToggleSwitch}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  )
}
