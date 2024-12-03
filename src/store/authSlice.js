import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        school: '',
        nickname: '',
        email: '',
        password: '',
    },
    reducers: {
        setSchool: (state, action) => {
            state.school = action.payload;
        },
        setNickname: (state, action) => {
            state.nickname = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        resetAuth: (state) => {
            state.school = '';
            state.nickname = '';
            state.email = '';
            state.password = '';
        },
    },
})

export const { setSchool, setNickname, setEmail, setPassword, resetAuth } = authSlice.actions;
export default authSlice.reducer;