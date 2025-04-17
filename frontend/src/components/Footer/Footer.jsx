import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css"
import menuImg from "../../assets/windowsMenu.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faUser, faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const [date, setDate] = useState(new Date().toUTCString());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toUTCString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="footerContainer">
        <div className="footerMenuImg">
          <img src={menuImg} alt="windows Menu Image" /> 

          <div className="footerMenuHidden">
            <ul style={{listStyle:"none"}}>
              <li><Link to = "/profile"><span className="footerMenuIcon"><FontAwesomeIcon icon={faUser} /></span> Profile</Link></li>
              <li><Link to="/reviews"><span className="footerMenuIcon"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></span> Home</Link></li>
              <li><span className="footerMenuIcon"><FontAwesomeIcon icon={faFolder} /></span> My Reviews</li>
              <li><span className="footerMenuIcon"><FontAwesomeIcon icon={faStar} /></span>Favourites</li>
              <li><Link to="/about"><span className="footerMenuIcon"><FontAwesomeIcon icon={faBuilding} /></span> About</Link></li>
            </ul>
          </div> 
        </div>

        <div className="currentTime">{date}</div>
      </div>
    </>
  )
}
