import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./Product/reducer";


export default configureStore({
    reducer: {
        content: dataSlice
    }
})