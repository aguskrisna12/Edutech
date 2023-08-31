import { createSlice } from "@reduxjs/toolkit";
import contentsList from "./data";

export const dataSlice = createSlice({
    name: 'content',
    initialState: {
        entities: contentsList,
        radioValue: '',
        logoBank: '',
        hargaKelas: 700000,
        potongan: 200000,
        promo: 0,
        kodeUnik: 0,
        totalPembayaran: 500000
    },
    reducers: {
        getValueRadio(state, action){
            state.radioValue = action.payload
        }

    }
})


export const { getValueRadio } = dataSlice.actions

export default dataSlice.reducer