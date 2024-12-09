import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        school: '',
        nickname: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
    reducers: {
        setAuthData: (state, action) => {
            Object.assign(state, action.payload);
        },
        resetAuth: (state) => {
            state.school = '';
            state.nickname = '';
            state.email = '';
            state.password = '';
            state.confirmPassword = '';
        },
    },
})

export const { setAuthData, resetAuth } = authSlice.actions;
export default authSlice.reducer;