import Report from '../models/Reports.js';
import asyncHandler from '../middleware/asyncHandler.js'

export const getUsersProfile = asyncHandler(async (req, res) => {

  try {
    const adminUser = await Report.find();

    res.status(200).json({ data: adminUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});