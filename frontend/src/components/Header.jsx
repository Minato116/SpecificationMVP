import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useLogoutMutation } from "../store/slices/usersApiSlice";
import { logout } from "../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";
import arrow from "../assets/images/up-arrow.png";
// import { LinkContainer } from 'react-router-bootstrap'
// import { Button } from "react-bootstrap";

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const threshold = 100; // The threshold of scroll in pixels
    const scrollPosition = window.scrollY;
    setSticky(scrollPosition > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApi] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      navigate("/login");
      toast.success("Logout Successfully");
    } catch (err) {
      console.log(err.err);
    }
  };
  return (
    <>
      <ScrollToTop
        smooth
        component={<img src={arrow} alt="" />}
        style={{ background: "black" }}
        className="no-print"
      />

      <nav
        className={`no-box tops navbar navbar-expand-lg sticky-top navbar-light text-white py-2 ${isSticky ? "navbar-sticky" : ""
          }`}
      >
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            <img
              src={logo}
              alt=""
              className="animated-rl rounded-circle h-50"
              style={{width:"60px"}}
            />
            {/* <span className="text-white align-self-center fw-bolder ms-2">CVFied</span> */}
          </Link>
          <button
            className="navbar-toggler no-print"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse no-print" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link scrollto" aria-current="page" to="/">
                  <i className="fa fa-home mx-1" /> Home
                </Link>
              </li>
              
              {/* <li className="nav-item">
                <Link className="nav-link scrollto" to="/">
                  <i className="fa fa-line-chart mx-1" />
                  Results
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <a
                  className="nav-link btn btn-outline-secondary px-4 mx-4"
                  href="#contact"
                >
                  Contact Us
                </a>
              </li> */}
              {userInfo ? (
                <>
                <li className="nav-item">
                <Link className="nav-link scrollto" to="/profile">
                  <i className="fas fa-user mx-1" /> Profile
                </Link>
              </li>
                  {userInfo.isAdmin === true ? (
                    <>
                      <li className="nav-item">
                        <Link to="/admin" className="nav-link scrollto">
                          <i className="fa fa-users fa-2x fa-solid mx-2" />
                          Admin 
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link onClick={logoutHandler} className="nav-link">
                          <i className="fa fa-sign-out mx-1" /> Signout
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li className="nav-item">
                      <Link onClick={logoutHandler} className="nav-link">
                        <i className="fa fa-sign-out mx-1" /> Signout
                      </Link>
                    </li>
                  )}
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      <i className="fa fa-sign-in mx-1" /> Sign In
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
