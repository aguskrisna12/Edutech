import { createSlice } from "@reduxjs/toolkit";
import contentsList from "./data";

export const dataSlice = createSlice({
    name: 'content',
    initialState: {
        entities: contentsList
    },
    reducers: {}
})

export default dataSlice.reducer