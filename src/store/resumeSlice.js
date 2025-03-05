import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
    name: 'resume',
    initialState: {
        name: '',
        age: '',
        position: '',
        email: '',
        introduction: '',
        stacks: '',
        projects: [],
        awards: '',
        createdAt: '',
        image: null,
    },
    reducers: {
        setResumeData: (state, action) => {
            Object.assign(state, action.payload);
        },
        resetResume: (state) => {
            state.name = '';
            state.age = '';
            state.position = '';
            state.email = '';
            state.introduction = '';
            state.stacks = '';
            state.image = null;
            state.projects = [];
            state.awards = '';
            state.createdAt = '';
        },
        addProject: (state, action) => {
            state.projects.push(action.payload);
        },

        updateProject: (state, action) => {
            const { index, project } = action.payload;
            state.projects[index] = { ...state.projects[index], ...project };
        },
        deleteProject: (state, action) => {
            state.projects.splice(action.payload, 1);
        },
    },
});

export const {
    setResumeData,
    resetResume,
    addProject,
    updateProject,
    deleteProject,
} = resumeSlice.actions;

export default resumeSlice.reducer;