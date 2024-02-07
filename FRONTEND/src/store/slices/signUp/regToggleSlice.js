import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    isRegPg: false
}

export const regToggleSlice = createSlice({

    name: 'regPg',
    initialState,
    reducers: {
        togglePg: (state) => {
            state.isRegPg = !state.isRegPg;
            //console.log(state.isRegPg)
        }
    }
})

export const {togglePg} = regToggleSlice.actions;

export default regToggleSlice.reducer;