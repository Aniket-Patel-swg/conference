import React from "react" 
import {BsSearch} from 'react-icons/bs'
// import { useRef,useEffect } from "react" 
export default function Navbar() {
    const hamburgerr = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-main-menu");
    // const [status,setActive] = useState(false);
    //this is for chaning class name
    // const[name,setName] = useState("hamburger");
    const toggle = () => {
        hamburgerr.classList.toggle("active");
        navMenu.classList.toggle("active");
    
     }; 
   
  return ( 
     <div className="header">
       <nav className="navbar">
         <div className="logo">PDEU</div>

        <ul className="nav-main-menu">
            <li className="nav-item">
                <a href="/" className="nav-link">CONFERENCE</a>
            </li>
            <li className="nav-item">
                <a href="/" className="nav-link">EXHIBITION</a>
            </li>
            <li className="nav-item">
                <a href="/" className="nav-link">ATTEND</a>
            </li> 
            <li className="nav-item">
                <a href="/" className="nav-link">PRESS</a>
            </li>
            <li className="nav-item">
                <a href="/" className="nav-link"><BsSearch/></a>
            </li>
          
        </ul>
        <div className="hamburger" onClick = {toggle} >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div> 
       </nav>
     </div>
  )
}