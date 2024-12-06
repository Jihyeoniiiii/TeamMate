import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        projectName: '',
        platform: '',
        image: null,
        members: [],
        description: '',
        technologies: '',
    },
    reducers: {
        setProjectName: (state, action) => {
            state.projectName = action.payload;
        },
        setPlatform: (state, action) => {
            state.platform = action.payload;
        },
        setImage: (state, action) => {
            state.image = action.payload;
        },
        addMember: (state, action) => {
            state.members.push(action.payload);
        },
        updateMember: (state, action) => {
            const { index, member } = action.payload;
            state.members[index] = member;
        },
        removeMember: (state, action) => {
            state.members.splice(action.payload, 1);
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        setTechnologies: (state, action) => {
            state.technologies = action.payload;
        },
        resetProject: () => ({
            projectName: '',
            platform: '',
            image: null,
            members: [],
            description: '',
            technologies: '',
        }),
    },
});

export const {
    setProjectName,
    setPlatform,
    setImage,
    addMember,
    updateMember,
    removeMember,
    setDescription,
    setTechnologies,
    resetProject,
} = projectSlice.actions;

export default projectSlice.reducer;
