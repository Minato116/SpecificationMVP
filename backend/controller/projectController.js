import asyncHandler from '../middleware/asyncHandler.js'
import Project from '../models/ProjectModel.js'
import mongoose from 'mongoose';
// Get all projects
export const getProjects = asyncHandler (async (req, res) => {
    try {
      const projects = await Project.find({}).sort({ createdAt: -1 });
      res.status(200).json(projects);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Create new project
  // export const createProject = asyncHandler (async (req, res) => {
  //   const { project, achievements, steps, risks, status } = req.body;
  //   // console.log("project", req.body)
  //   try {
  //     const newProject = await Project.create({ 
  //       project, 
  //       achievements, 
  //       steps, 
  //       risks, 
  //       status 
  //     });
  //     res.status(200).json({message:"Added Successfully!"});
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  // });
  export const createProject = asyncHandler (async (req, res) => {
    const { project, achievements, steps, risks, status } = req.body;
    // console.log("project", req.body)
    try {
      const newProject = await Project.create(req.body);
      res.status(200).json({message:"Added Successfully!"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Update project
  export const updateProject = asyncHandler (async (req, res) => {
    const{ id } = req.params;
    console.log("bd", req.body)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Invalid project ID' });
    }
    try {
      const project = await Project.findByIdAndUpdate(
        id, 
        { ...req.body }, 
        { new: true }
      );
      res.status(200).json({message: "Project updated successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Delete project
  export const deleteProject = asyncHandler (async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Invalid project ID' });
    }
    try {
      await Project.findByIdAndDelete(id);
      res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

export const getProjectById = asyncHandler( async(req, res) => {
    const project = await Project.findById(req.params.id);
    console.log("pppp", project, req.params.id)
    if(project){
        return res.json(project);
    }else{
        res.status(404);
        throw new Error('Resource Not Found');
    }
})