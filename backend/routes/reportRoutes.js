import express from 'express';
import { createReportData } from '../controller/reportController.js';

const router = express.Router();

// Use POST instead of GET to create a report
router.route('/').post(createReportData);

export default router;
