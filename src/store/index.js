import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import projectReducer from "./projectSlice"; 
import communityReducer from "./communitySlice";
import resumeReducer from "./resumeSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,        
        project: projectReducer,   
        community: communityReducer,
        resume: resumeReducer,
    }
});
