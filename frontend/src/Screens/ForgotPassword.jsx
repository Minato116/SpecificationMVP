import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../store/slices/authSlice";
import { useLoginMutation } from "../store/slices/usersApiSlice";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import logo from "../assets/images/logo.jpg";
import login_img from "../assets/images/login.jpg"

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      //   const res = await login({ email, password }).unwrap();
      //   dispatch(setCredentials({ ...res }));
      navigate("/");
      toast.success("Changed Password Successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <>
      <section className="vh-60" data-aos="zoom-in">
        <div className="container py-5 h-100" id="login">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card shadow-lg" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <Link to="/login" style={{ position: "absolute", top: "30px", left: "30px" }}>
                    <i className="fa fa-arrow-left fa-3x text-secondary"></i>
                  </Link>
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={login_img}
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span><img src={logo} alt="" className="animated" width="100" height="100" /></span>
                          <span className="h1 fw-bold mb-0 mx-5 text-secondary">  Reset Account Password</span>
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="password"
                            id="newPassword"
                            placeholder="Enter New Password"
                            className="form-control form-control-lg"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            placeholder="Conform New password"
                            className="form-control form-control-lg"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-dark btn-lg btn-block w-100 mb-2"
                            type="button"
                            onClick={onSubmitHandler}
                          >
                            Reset Password
                          </button>
                          {/* {isLoading && <Loader />} */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ForgotPassword