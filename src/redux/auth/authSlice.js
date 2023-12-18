import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: { name: "", email: null, id: null, books: [] },
  isLoggedIn: false,
  token: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginData: (state, { payload }) => {
      // console.log("🚀 ~ payload LOGIN:", payload);
      state.token = payload.token;
      state.userData.email = payload.user.email;
      state.userData.name = payload.user.name;
      state.isLoggedIn = true;
    },
    setUser: (state, { payload }) => {
      state.userData.email = payload.email;
      state.userData.name = payload.name;
      state.userData.id = payload._id;
      state.isLoggedIn = true;
    },
    setLogout: (state, { payload }) => {
      return initialState;
    },
  },
});

export const { setLoginData, setLogout, setUser } = authSlice.actions;

export default authSlice.reducer;
