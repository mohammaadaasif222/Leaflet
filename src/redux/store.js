import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./features/dataSlice";
const store = configureStore({
    reducer:{
        data : DataReducer,
    },
})

export default store;