import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import WaveEffect from '../components/WaveEffect';
import { toast } from "react-toastify";
import { useGetProjectByIdQuery, useUpdateProjectByIdMutation } from '../store/slices/projectSlice';
import Loader from '../components/Loader'
import Message from '../components/Message'

const UpdateProject = () => {
    const { id: projectId } = useParams();
    // console.log("id", projectId)
    const navigate = useNavigate();
    const { data, isLoading, error } = useGetProjectByIdQuery(projectId);
    const [updateProject, { isLoading: loadingUpdate }] = useUpdateProjectByIdMutation();
    const [formData, setFormData] = useState({
        project: '',
        achievements: '',
        steps: '',
        risks: '',
        status: ''
    });
    useEffect(() => {
        if (data) {
            setFormData({
                project: data.project || '',
                achievements: data.achievements || '',
                steps: data.steps || '',
                risks: data.risks || '',
                status: data.status || ''
            });
        }
    }, [data]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await updateProject({ id: projectId, formData: formData }).unwrap();
            // console.log(result)
            if (result.message) {
                toast.success(result.message);
                navigate('/'); // Redirect after successful update
            }
        } catch (err) {
            toast.error(err?.data?.error || 'Something went wrong');
        }
    }
    return (
        <>
            <WaveEffect
                title={"Update Project"}
                content={""}
            />
            {
                isLoading ? (<Loader />) : error ? (<Message variant='danger'> {error?.data?.message || error.error} </Message>) : (
                    <div className="container pt-4">
                        <div className="row">
                            <div className="col-12">
                                <form onSubmit={handleSubmit} className="card p-4 mb-4">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label htmlFor="project" className="form-label">Project Name</label>
                                            <input
                                                id="project"
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter project name"
                                                value={formData.project}
                                                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="achievements" className="form-label">Achievements</label>
                                            <input
                                                id="achievements"
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter achievements"
                                                value={formData.achievements}
                                                onChange={(e) => setFormData({ ...formData, achievements: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="steps" className="form-label">Steps</label>
                                            <input
                                                id="steps"
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter steps"
                                                value={formData.steps}
                                                onChange={(e) => setFormData({ ...formData, steps: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="risks" className="form-label">Risks</label>
                                            <input
                                                id="risks"
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter risks"
                                                value={formData.risks}
                                                onChange={(e) => setFormData({ ...formData, risks: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="status" className="form-label">Status</label>
                                            <select
                                                id="status"
                                                className="form-select"
                                                value={formData.status}
                                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                            >
                                                <option value="">Select Status</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Completed">Completed</option>
                                                <option value="On Hold">On Hold</option>
                                            </select>
                                        </div>

                                        <div className="col-12 d-flex justify-content-between">

                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => navigate(-1)}
                                            >
                                                Back
                                            </button>
                                            <button type="submit" className="btn btn-primary">
                                                Update Project
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default UpdateProject