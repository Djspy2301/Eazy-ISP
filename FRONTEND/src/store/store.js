import { configureStore } from "@reduxjs/toolkit";
import { regToggleReducer, loginReducer, registerReducer } from "./index"; 


export const store = configureStore({
    reducer: {
        regToggle: regToggleReducer,
        login: loginReducer,
        register: registerReducer
    }
});