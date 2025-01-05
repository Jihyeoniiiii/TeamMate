import { createSlice } from "@reduxjs/toolkit";

const communitySlice = createSlice({
    name: 'community',
    initialState: {
        title: '',
        body: '',
        createdAt: '',
        images: [],
        tags: [],
        commets: [],
    },
    reducers: {
        setCommunityData: (state, action) => {
            Object.assign(state, action.payload); 
        },
        resetCommunity: (state) => {
            state.title = '';
            state.body = '';
            state.createAt = '';
            state.images = [];
            state.tags = [];
            state.comments = [];
        },
        addComment: (state, action) => {
            state.comments.push(action.payload);
        },
        deleteComment: (state, action) => {
            state.comments = state.comments.filter(comment => comment.id !== action.payload);
        },
        updateComment: (state, action) => {
            const {id, text} = action.payload;
            const comment = state.comments.find(comment => comment.id === id);
            if(comment) {
                comment.text = text;
            }
        }
        
    },
});

export const {
    setCommunityData,
    resetCommunity,
    addComment,
    deleteComment,
    updateComment
} = communitySlice.actions;

export default communitySlice.reducer;
