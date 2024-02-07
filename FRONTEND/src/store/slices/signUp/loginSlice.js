import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    password: ""
}

export const LoginSlice = createSlice({

    name: 'login',
    initialState,
    reducers: {

        setUsername: (state, action) =>{
            state.username = action.payload;
        },

        setPassword: (state, action) => {

            state.password = action.payload;
        }
    }
})

export const {setUsername, setPassword} = LoginSlice.actions;

export default LoginSlice.reducer;