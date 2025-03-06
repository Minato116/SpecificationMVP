import { PROJECT_URL } from "../../constants";
import { apiSlice } from './apiSlice'

export const projectSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addProject: builder.mutation({
            query: (data) => ({
                url: PROJECT_URL,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Project']
        }),
        getAllProjects: builder.query({
            query: () => ({
                url: PROJECT_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        getProjectById: builder.query({
            query: (projectId) => ({
                url: `${PROJECT_URL}/${projectId}`,
            }),
            keepUnusedDataFor: 5,
        }),
        updateProjectById: builder.mutation({
            query: ({ id, formData }) => ({
                url: `${PROJECT_URL}/${id}`,
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['Project'],
        }),
        deleteProject: builder.mutation({
            query: (projectId) => ({
                url: `${PROJECT_URL}/${projectId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useAddProjectMutation,
    useGetAllProjectsQuery,
    useDeleteProjectMutation,
    useUpdateProjectByIdMutation,
    useGetProjectByIdQuery
} = projectSlice;