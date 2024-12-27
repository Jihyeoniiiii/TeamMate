import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        projectName: '',
        startDate: '',
        endDate: '',
        deadLine: '',
        platform: '',
        createdAt: '',
        image: null,
        platform_dto_list: [{ role: "", count: 1 }],
        description: '',
        technologies: [],
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
            state.createAt = '';
            state.platform = '';
            state.image = null;
            state.platform_dto_list = [{ role: "", count: 1 }];
            state.description = '';
            state.technologies = [];
        },
        
        addMember: (state, action) => {
            state.platform_dto_list.push(action.payload);
        },
        updateMember: (state, action) => {
            const { index, member } = action.payload;
            state.platform_dto_list[index] = member;
        },
        removeMember: (state, action) => {
            state.platform_dto_list.splice(action.payload, 1);
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
