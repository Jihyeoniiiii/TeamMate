import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        projectName: '',
        startDate: '',
        endDate: '',
        deadLine: '',
        platform: '',
        image: null,
        members: [],
        description: '',
        technologies: '',
    },
    reducers: {
        setProjectData: (state, action) => {
            Object.assign(state, action.payload); 
        },
        resetProject: (state) => {
            state.projectName = '';
            state.startDate = '';
            state.endDate = '';
            state.deadLine = '';
            state.platform = '';
            state.image = null;
            state.members = [];
            state.description = '';
            state.technologies = '';
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
        
    },
});

export const {
    setProjectData,
    resetProject,
    setProjectName,
    setPlatform,
    setImage,
    addMember,
    updateMember,
    removeMember,
    setDescription,
    setTechnologies,
} = projectSlice.actions;

export default projectSlice.reducer;
