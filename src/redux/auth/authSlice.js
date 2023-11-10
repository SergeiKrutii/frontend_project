import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: { email: null, id: null, books: [] },
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginData: (state, { payload }) => {},
    setUser: (state, { payload }) => {},
    setLogout: (state, { payload }) => {},
  },
});

export const { setLoginData, setLogout, setUser } = authSlice.actions;

export default authSlice.reducer;
