import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc Auth User & get token
// @Route Post /api/users/login
// @Access Public
const authUser = asyncHandler(async (req, res) => {
  let sess = req.session;
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  });

  // && ( await user.matchPassword(password))

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    sess.userId = user._id;
    // console.log(sess);
    res.json({
      _id: user._id,
      firstName: user.firstName,
      middleName: user.middleName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      education: user.education,
      employmentDetails: user.employmentDetails,
      gender: user.gender,
    });
  } else {
    res.status(401);
    throw new Error(" Invalid email or password ");
  }
});

// @desc Update Admin
// @Route PUT /api/users/profile
// @Access Admin
const updateAdmin = asyncHandler(async (req, res) => {
  const { adminName, about, email, pic, phone, instrument, facebook, instagram, linkedin } =
    req.body;
  const profileExist = await Profile.findOne({});

  if (profileExist) {
    profileExist.adminName = adminName || profileExist.adminName;

    // profileExist.email = email || profileExist.email;
    profileExist.email = email;

    // profileExist.about = about || profileExist.about;
    profileExist.about = about;

    // profileExist.phone = phone || profileExist.phone;
    profileExist.phone = phone;

    // profileExist.address = address || profileExist.address;
    profileExist.instrument = instrument;

    // profileExist.job = job || profileExist.job;
    profileExist.facebook = facebook;

    // profileExist.birthDate = birthDate || profileExist.birthDate;
    profileExist.instagram = instagram;
    profileExist.linkedin = linkedin;

    profileExist.pic = pic || profileExist.pic;

    const updatedUser = await profileExist.save();

    res.json({
      adminName: updatedUser.adminName,
      email: updatedUser.email,
      about: updatedUser.about,
      instrument: updatedUser.instrument,
      phone: updatedUser.phone,
      pic: updatedUser.pic,
      facebook: updatedUser.facebook,
      instagram: updatedUser.instagram,
      linkedin: updatedUser.linkedin,
    });
  } else {
    const profile = await Profile.create({
      adminName,
      about,
      email,
      pic,
      phone,
      instrument,
      facebook,
      linkedin,
      instagram,
    });

    if (profile) {
      res.json({
        adminName: profile.adminName,
        email: profile.email,
        about: profile.about,
        instrument: profile.instrument,
        phone: profile.phone,
        pic: profile.pic,
        instagram: profile.instagram,
        linkedin: profile.linkedin,
        facebook: profile.facebook,
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  }

  console.log(req.body);
  res.send("UPdate Admin");
});
// @desc Register User
// @Route Post /api/users
// @Access Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    password,
    gender,
    dateOfBirth,
    preferredLanguage,
    employmentDetails,
    dateOfJoining,
    keySkills,
    education,
    certifications
  } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    firstName,
    middleName,
    lastName,
    email,
    password,
    gender,
    dateOfBirth,
    preferredLanguage,
    employmentDetails,
    dateOfJoining,
    keySkills,
    education,
    certifications
  });

  if (user) {
    generateToken(res, user._id);
    res.json({
      firstName: user.firstName,
      middleName: user.middleName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      education: user.education,
      employmentDetails: user.employmentDetails,
      gender: user.gender,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// @desc GET Admin Profile
// @Route GET /api/users/getadmin
// @Access Private
const getAdminProfile = asyncHandler(async (req, res) => {
  const admin = await Profile.find({});
  res.json(admin);
});

// @desc LogOut $ clear user cookies
// @Route Post /api/users/logout
// @Access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  req.session.destroy();
  res.status(200).json({
    messaage: "Logged Out Successfully",
  });
});
// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.middleName = req.body.middleName || user.middleName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.gender = req.body.gender || user.gender;
    user.dateOfBirth = req.body.dateOfBirth || user.dateOfBirth;
    user.preferredLanguage = req.body.preferredLanguage || user.preferredLanguage;
    user.employmentDetails = req.body.employmentDetails || user.employmentDetails;
    user.dateOfJoining = req.body.dateOfJoining || user.dateOfJoining;
    user.keySkills = req.body.keySkills || user.keySkills;
    user.education = req.body.education || user.education;
    user.certifications = req.body.certifications || user.certifications;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      middleName: updatedUser.middleName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      gender: updatedUser.gender,
      dateOfBirth: updatedUser.dateOfBirth,
      preferredLanguage: updatedUser.preferredLanguage,
      employmentDetails: updatedUser.employmentDetails,
      dateOfJoining: updatedUser.dateOfJoining,
      keySkills: updatedUser.keySkills,
      education: updatedUser.education,
      certifications: updatedUser.certifications,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc Get user by ID
// @route GET /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.json({ message: 'User removed' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export {
  authUser,
  registerUser,
  updateAdmin,
  logoutUser,
  getAdminProfile,
  updateUserProfile,
  deleteUser,
  getUserById
};
