import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./ReduxConcepts/Slice/TaskSlice";
export const store = configureStore({
    reducer:{
        tasks:TaskReducer,

    }
})