import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  name: "",
  username: "",
  email: "",
  phone: "",
  password: "",
  cpassword: "",
};

export const registerSlice = createSlice({
  name: "regPg",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setCPassword: (state, action) => {
      state.cpassword = action.payload;
    },
  },
});

export const {
  setBrand,
  setName,
  setUsername,
  setEmail,
  setPhone,
  setPassword,
  setCPassword,
} = registerSlice.actions;

export default registerSlice.reducer;
