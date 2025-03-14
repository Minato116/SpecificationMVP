import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WaveEffect from "../components/WaveEffect";
import { toast } from "react-toastify";
import { setCredentials } from "../store/slices/authSlice";
import { useUpdateUserMutation } from "../store/slices/usersApiSlice";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dateOfBirth: '',
    preferredLanguage: '',
    employmentDetails: '',
    dateOfJoining: '',
    keySkills: '',
    education: '',
    certifications: ''
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState(null);

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    if (userInfo) {
      // Format dates from ISO to YYYY-MM-DD for input fields
      const formattedDateOfBirth = userInfo.dateOfBirth ? userInfo.dateOfBirth.substr(0, 11) : '';
      const formattedDateOfJoining = userInfo.dateOfJoining ? userInfo.dateOfJoining.substr(0, 11) : '';

      setFormData({
        firstName: userInfo.firstName || '',
        middleName: userInfo.middleName || '',
        lastName: userInfo.lastName || '',
        email: userInfo.email || '',
        password: '',
        confirmPassword: '',
        gender: userInfo.gender || '',
        dateOfBirth: formattedDateOfBirth,
        preferredLanguage: userInfo.preferredLanguage || '',
        employmentDetails: userInfo.employmentDetails || '',
        dateOfJoining: formattedDateOfJoining,
        keySkills: userInfo.keySkills || '',
        education: userInfo.education || '',
        certifications: userInfo.certifications || ''
      });
    }
  }, [userInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Password do not match')
    } else {
      try {
        // const respond = await profile({ _id: userInfo._id, name, email, password })
        // console.log(respond);
        const res = await updateUser({ ...formData, id: userInfo._id }).unwrap();
        dispatch(setCredentials(res));
        toast.success('Profile updated successfully')
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <>
      <WaveEffect title={"Change Profile Information"} content={""} />
      <section className="section pt-1">
        <div className="container">
          <div className="row justify-content-center">


            <div className="col-md-10">
              <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                  <h4 className="mb-0">Personal Information</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-5">
                      {/* First Name */}
                      <div className="mb-3">
                        <label htmlFor="firstName" className="form-label custom-label">
                          First Name
                        </label>
                        <div className="input-group">
                          <span className="input-group-text custom-input-group-text">
                            <i className="fa fa-user"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control custom-input"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                          />
                        </div>
                      </div>

                      {/* Middle Name */}
                      <div className="mb-3">
                        <label htmlFor="middleName" className="form-label custom-label">
                          Middle Name
                        </label>
                        <div className="input-group">
                          <span className="input-group-text custom-input-group-text">
                            <i className="fa fa-user"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control custom-input"
                            id="middleName"
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                            placeholder="Middle Name"
                          />
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="mb-3">
                        <label htmlFor="lastName" className="form-label custom-label">
                          Last Name
                        </label>
                        <div className="input-group">
                          <span className="input-group-text custom-input-group-text">
                            <i className="fa fa-user"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control custom-input"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div>
                      {/* Email */}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label custom-label">
                          Email
                        </label>
                        <div className="input-group">
                          <span className="input-group-text custom-input-group-text">
                            <i className="fa fa-envelope"></i>
                          </span>
                          <input
                            type="email"
                            className="form-control custom-input"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>

                      {/* Gender */}
                      <div className="mb-3">
                        <label htmlFor="gender" className="form-label custom-label">
                          Gender
                        </label>
                        <div className="input-group">
                          <span className="input-group-text custom-input-group-text">
                            <i className="fa fa-venus-mars"></i>
                          </span>
                          <select
                            className="form-select custom-input ps-2"
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            style={{ height: "38px" }}
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                          </select>
                        </div>
                      </div>
                      {/* Date of Birth */}
                      <div className="mb-3">
                        <label htmlFor="dateOfBirth" className="form-label custom-label">
                          Date of Birth
                        </label>
                        <div className="input-group">
                          <span className="input-group-text custom-input-group-text">
                            <i className="fa fa-calendar"></i>
                          </span>
                          <input
                            type="date"
                            className="form-control custom-input"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Preferred Language */}
                      <div className="mb-3">
                        <label htmlFor="preferredLanguage" className="form-label custom-label">
                          Preferred Language
                        </label>
                        <div className="input-group">
                          <span className="input-group-text custom-input-group-text">
                            <i className="fa fa-language"></i>
                          </span>
                          <select
                            className="form-select custom-input ps-2"
                            id="preferredLanguage"
                            name="preferredLanguage"
                            value={formData.preferredLanguage}
                            onChange={handleChange}
                            style={{ height: "38px" }}
                          >
                            <option value="">Select Language</option>
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="German">German</option>
                            <option value="Mandarin">Mandarin</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Arabic">Arabic</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-7">
                      {/* Employment Details */}
                      <div className="mb-3">
                        <label htmlFor="employmentDetails" className="form-label custom-label">
                          Employment Details
                        </label>
                        <div className="input-group">
                          <span className="input-group-text custom-input-group-text">
                            <i className="fa fa-briefcase"></i>
                          </span>
                          <textarea
                            className="form-control custom-input"
                            id="employmentDetails"
                            name="employmentDetails"
                            value={formData.employmentDetails}
                            onChange={handleChange}
                            placeholder="Enter your current employment details"
                            rows="3"
                            required
                          ></textarea>
                        </div>
                      </div>
                      {/* Date of Joining */}
                      <div className="mb-3">
                        <label htmlFor="dateOfJoining" className="form-label custom-label">
                          Date of Joining
                        </label>
                        <div className="input-group">
                          <span className="input-group-text custom-input-group-text">
                            <i className="fa fa-calendar"></i>
                          </span>
                          <input
                            type="date"
                            className="form-control custom-input"
                            id="dateOfJoining"
                            name="dateOfJoining"
                            value={formData.dateOfJoining}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Key Skills */}
                      <div className="mb-3">
                        <label htmlFor="keySkills" className="form-label custom-label">
                          Key Skills
                        </label>
                        <div className="input-group">
                          <span className="input-group-text custom-input-group-text">
                            <i className="fa fa-cogs"></i>
                          </span>
                          <textarea
                            className="form-control custom-input"
                            id="keySkills"
                            name="keySkills"
                            value={formData.keySkills}
                            onChange={handleChange}
                            placeholder="Enter your key skills (comma separated)"
                            rows="2"
                            required
                          ></textarea>
                        </div>
                      </div>
                      {/* Education */}
                      <div className="mb-3">
                        <label htmlFor="education" className="form-label custom-label">
                          Education
                        </label>
                        <div className="input-group">
                          <span className="input-group-text custom-input-group-text">
                            <i className="fa fa-graduation-cap"></i>
                          </span>
                          <textarea
                            className="form-control custom-input"
                            id="education"
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            placeholder="Enter your educational background"
                            rows="3"
                            required
                          ></textarea>
                        </div>
                      </div>

                      {/* Certifications */}
                      <div className="mb-3">
                        <label htmlFor="certifications" className="form-label custom-label">
                          Certifications
                        </label>
                        <div className="input-group">
                          <span className="input-group-text custom-input-group-text">
                            <i className="fa fa-certificate"></i>
                          </span>
                          <textarea
                            className="form-control custom-input"
                            id="certifications"
                            name="certifications"
                            value={formData.certifications}
                            onChange={handleChange}
                            placeholder="Enter your certifications"
                            rows="3"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mb-4">
                      <button
                        type="submit"
                        className="btn btn-primary px-5 py-2"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Updating...
                          </>
                        ) : 'Update Profile'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                  <h4 className="mb-0">Security Information</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    {/* Password */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="password" className="form-label custom-label">
                        Password
                      </label>
                      <div className="input-group">
                        <span className="input-group-text custom-input-group-text">
                          <i className="fa fa-lock"></i>
                        </span>
                        <input
                          type={passwordVisible ? "text" : "password"}
                          className="form-control custom-input"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Enter your new password"
                        />
                        <span
                          className="input-group-text custom-input-group-text"
                          onClick={togglePasswordVisibility}
                          style={{ cursor: 'pointer' }}
                        >
                          <i className={`fa ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}></i>
                        </span>
                      </div>
                      <small className="text-muted">Leave blank to keep current password</small>
                    </div>

                    {/* Confirm Password */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="confirmPassword" className="form-label custom-label">
                        Confirm Password
                      </label>
                      <div className="input-group">
                        <span className="input-group-text custom-input-group-text">
                          <i className="fa fa-lock"></i>
                        </span>
                        <input
                          type={confirmPasswordVisible ? "text" : "password"}
                          className="form-control custom-input"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm your new password"
                        />
                        <span
                          className="input-group-text custom-input-group-text"
                          onClick={toggleConfirmPasswordVisibility}
                          style={{ cursor: 'pointer' }}
                        >
                          <i className={`fa ${confirmPasswordVisible ? "fa-eye-slash" : "fa-eye"}`}></i>
                        </span>
                      </div>
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

export default Profile;
