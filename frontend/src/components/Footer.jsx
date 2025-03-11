import React from "react";
import Wave from "react-wavify";
import { Link } from 'react-router-dom'
// import { FaHome, FaSearch, FaPencilAlt } from 'react-icons/fa'
// import { useSelector } from "react-redux";

const Footer = () => {
  return (
    <>
      <footer className="footer shadow-0 border-0 pb-3">
        <Wave mask="url(#mask)" fill="#1240EF" style={{position: "relative", bottom: "-100px"}}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="white" />
              <stop offset="0.5" stopColor="black" />
            </linearGradient>
            <mask id="mask">
              <rect
                x="0"
                y="0"
                width="2000"
                height="300"
                fill="url(#gradient)"
              />
            </mask>
          </defs>
        </Wave>
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-3">
              <h6>About CVFied</h6>
              {/* <p>
                ...
              </p> */}
            </div>
            <div className="col-md-4 my-3">
              <h6>Links</h6>
              <ul className="list-unstyled">
                {/* <li>
                  Important: <Link to="#">Terms & Conditions</Link>,
                  <Link >Privacy Policy</Link>
                </li> */}
                {/* <li>
                  Menu: <Link to="/">Home</Link>, <Link to="/Låtdiginspireras">Methodology</Link>,
                  <Link to="/Nyheter">Assesments</Link>
                  <Link to="/aboutme">Results</Link>
                </li> */}
              </ul>
            </div>
            <div className="col-md-4 my-3">
              {/* <div className="mb-4">
                <a to="#" className="text-decoration-none">
                  <i className="fab fa-facebook fa-3x text-dark mx-2"></i>
                </a>
                <a to="#" className="text-decoration-none">
                  <i className="fab fa-instagram fa-3x text-dark mx-2"></i>
                </a>
                <a to="#" className="text-decoration-none">
                  <i className="fab fa-pinterest fa-3x text-dark mx-2"></i>
                </a>
              </div> */}
              <p>
                We would love to hear from you 
                <Link to="#">
                  <strong>  contact@site.com</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
