import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../store/slices/authSlice";
import { useLoginMutation } from "../store/slices/usersApiSlice";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import logo from "../assets/images/logo.jpg";
import login_img from "../assets/images/logo.jpeg"

const LogInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  // const { userInfo } = useSelector((state) => state.userInfo);
  // Posting login data to server
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
      toast.success("LogIn Successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <section className="vh-60 bg-secondary" data-aos="zoom-in">
        <div className="container py-5 h-100" id="login">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card shadow-lg" style={{borderRadius: "1rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={login_img}
                      alt="login form"
                      className="img-fluid h-100"
                      style={{borderRadius: "1rem 0 0 1rem"}}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black ">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">                          
                          <span><img src={logo} alt="" className="animated" width="100" height="100" /></span>
                          <span className="h1 fw-bold mb-0 mx-5 text-secondary">  CVFied</span>
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4 ">
                          <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                          />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                            Login
                          </button>
                          { isLoading && <Loader /> }
                        </div>

                        {/* <a className="small text-muted" href="#!">
                          Forgot password?
                        </a> */}
                        <div className="d-flex justify-content-between">
                        <p className="pb-lg-2">                          
                          <Link to="/signup" className="text-secondary fw-bolder" >
                            Register here
                          </Link>
                        </p>
                        <p className="pb-lg-2">                          
                          <Link to="/forgot" className="text-secondary fw-bolder" >
                            Forgot Password?
                          </Link>
                        </p>
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
  );
};

export default LogInScreen;
