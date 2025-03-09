import React, { useState } from "react";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../store/slices/usersApiSlice";
import { Link, useNavigate } from "react-router-dom";
import { setCredentials } from "../store/slices/authSlice";
import signup from "../assets/images/Robots.webp";

const SignUp = () => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    dateOfBirth: '',
    preferredLanguage: '',
    employmentDetails: '',
    dateOfJoining: '',
    keySkills: '',
    education: '',
    certifications: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const [register, { isLoading }] = useRegisterMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters long';
    if (formData.password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
    if (!formData.preferredLanguage.trim()) newErrors.preferredLanguage = 'Preferred Language is required';
    if (!formData.employmentDetails.trim()) newErrors.employmentDetails = 'Employment Details are required';
    if (!formData.dateOfJoining) newErrors.dateOfJoining = 'Date of Joining is required';
    if (!formData.keySkills.trim()) newErrors.keySkills = 'Key Skills are required';
    if (!formData.education.trim()) newErrors.education = 'Education details are required';
    // if (!formData.certifications.trim()) newErrors.certifications = 'Certifications are required';
    return newErrors;
  };
  const signupHandler = async (e) => {
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      for (let key in validationErrors) {
        toast.error(validationErrors[key]);
      }
    } else {
      setErrors({});
      try {
        const res = await register(formData).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("User Register Successfully");
        setFormData({
          firstName: '',
          middleName: '',
          lastName: '',
          email: '',
          password: '',
          gender: '',
          dateOfBirth: '',
          preferredLanguage: '',
          employmentDetails: '',
          dateOfJoining: '',
          keySkills: '',
          education: '',
          certifications: ''
        });
        setConfirmPassword("");
        navigate("/login");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <section data-aos="zoom-in">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">                  
                  <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-2 text-secondary">
                    Sign up
                  </p>
                  <hr className="mb-4" />
                  <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-2 h-full">
                    <form className=" shadow-none mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-2x me-3 fa-fw text-secondary"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="name"
                            id="firstName"
                            name="firstName"
                            className="form-control"
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-2x me-3 fa-fw text-secondary"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="name"
                            id="middleName"
                            name="middleName"
                            className="form-control"
                            placeholder="Enter Middle Name"
                            value={formData.middleName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-2x me-3 fa-fw text-secondary"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="name"
                            name="lastName"
                            className="form-control"
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-2x me-3 fa-fw text-secondary"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Email Address"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-2x me-3 fa-fw text-secondary"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-2x me-3 fa-fw text-secondary"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="password"
                            id="confirmPassword"
                            className="form-control"
                            placeholder="Repeat your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-venus-mars fa-2x me-3 fa-fw text-secondary"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <select
                            id="gender"
                            name="gender"
                            className="form-control px-3"
                            value={formData.gender}
                            onChange={handleChange}
                            style={{ height: '52px' }}
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="femal">Female</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-6 order-1 order-lg-2">
                    <form className="shadow-none mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-calendar fa-2x me-3 fa-fw text-secondary"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            className="form-control"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            placeholder="Enter your Birthday"
                            onFocus={(e) => (e.target.type = 'date')}
                            onBlur={(e) => (e.target.type = formData.dateOfBirth ? 'date' : 'text')}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-globe fa-2x me-3 fa-fw text-secondary"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="preferredLanguage"
                            name="preferredLanguage"
                            className="form-control"
                            placeholder="Preferred Language"
                            value={formData.preferredLanguage}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Employment Details */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-briefcase fa-2x me-3 fa-fw text-secondary"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <textarea
                            id="employmentDetails"
                            name="employmentDetails"
                            className="form-control"
                            placeholder="Employment Details"
                            value={formData.employmentDetails}
                            onChange={handleChange}
                            style={{ height: '52px' }}
                          />
                        </div>
                      </div>

                      {/* Date of Joining */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-calendar-alt fa-2x me-3 fa-fw text-secondary"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <input
                            type="date"
                            id="dateOfJoining"
                            name="dateOfJoining"
                            className="form-control"
                            value={formData.dateOfJoining}
                            onChange={handleChange}
                            placeholder="Enter date Of Joining"
                            onFocus={(e) => (e.target.type = 'date')}
                            onBlur={(e) => (e.target.type = formData.dateOfBirth ? 'date' : 'text')}
                          />
                        </div>
                      </div>

                      {/* Key Skills */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-2x me-3 fa-fw text-secondary"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <textarea
                            id="keySkills"
                            name="keySkills"
                            className="form-control"
                            placeholder="Key Skills"
                            value={formData.keySkills}
                            onChange={handleChange}
                            style={{ height: '52px' }}
                          />
                        </div>
                      </div>

                      {/* Education */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-university fa-2x me-3 fa-fw text-secondary"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <textarea
                            id="education"
                            name="education"
                            className="form-control"
                            placeholder="Education"
                            value={formData.education}
                            onChange={handleChange}
                            style={{ height: '52px' }}
                          />
                        </div>
                      </div>

                      {/* Certifications */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-certificate fa-2x me-3 fa-fw text-secondary"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <textarea
                            id="certifications"
                            name="certifications"
                            className="form-control"
                            placeholder="Certifications"
                            value={formData.certifications}
                            onChange={handleChange}
                            style={{ height: '52px' }}
                          />
                        </div>
                      </div>

                    </form>
                  </div>

                </div>
                <div className="d-flex justify-content-center mx-4 mb-1 mb-lg-4 mt-5">
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg w-50"
                    onClick={signupHandler}
                  >
                    Register
                  </button>
                  {isLoading && <Loader />}
                </div>
                <div className="text-center">
                <Link to="/login" >
                    Already have an account?
                  </Link>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
