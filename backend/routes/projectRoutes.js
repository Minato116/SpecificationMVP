import express from 'express'
import {
    createProject,
    deleteProject,
    getProjectById,
    getProjects,
    updateProject
} from '../controller/projectController.js'

const router = express.Router();

router.route('/').post(createProject).get(getProjects);
router.route('/:id').delete(deleteProject).get(getProjectById).put(updateProject);

export default router;