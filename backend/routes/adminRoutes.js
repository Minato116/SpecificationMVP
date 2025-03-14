import express from "express";
import { getUsersProfile } from "../controller/adminUsersController.js";
import Reports from "../models/Reports.js";  

const router = express.Router();

// Fix: Use correct HTTP methods for each route
router.get("/", getUsersProfile);

// router.post("/", async (req, res) => {
//     try {
//         const newUser = new Reports(req.body);
//         await newUser.save();
//         res.json({ success: true, message: "User added successfully" });
//     } catch (err) {
//         res.status(500).json({ success: false, message: err.message });
//     }
// });

router.put("/:id", async (req, res) => {
    try {
        const updatedUser = await Reports.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ success: false, message: "User not found" });
        res.json({ success: true, message: "User updated successfully", data: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedUser = await Reports.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ success: false, message: "User not found" });
        res.json({ success: true, message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

export default router;
