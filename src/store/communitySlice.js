import { createSlice } from "@reduxjs/toolkit";

const communitySlice = createSlice({
    name: 'community',
    initialState: {
        title: '',
        body: '',
        createdAt: '',
        image: null,
        tags: [],
    },
    reducers: {
        setCommunityData: (state, action) => {
            Object.assign(state, action.payload); 
        },
        resetCommunity: (state) => {
            state.title = '';
            state.body = '';
            state.createAt = '';
            state.image = null;
            state.tags = [];
        },
        
    },
});

export const {
    setCommunityData,
    resetCommunity,
} = communitySlice.actions;

export default communitySlice.reducer;
