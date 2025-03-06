import express from 'express'
import {
    authUser,
    registerUser,
    updateAdmin,
    logoutUser,
    getAdminProfile,
    updateUserProfile,
    getUserById,
    deleteUser,
} from '../controller/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);

// router.route('/:id').put(protect, admin, updateUserById);
router.route('/profile').put(protect, admin, updateAdmin);
router.get('/getadmin', getAdminProfile);

router.route('/').post(registerUser);
router.route('/:id').get(protect, getUserById).delete(protect, admin, deleteUser);
router.route('/profile/:id').put(protect, updateUserProfile);
router.route('/logout').post(logoutUser);

export default router;