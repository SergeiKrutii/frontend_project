import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: { name: "", email: null, id: null },
  isLoggedIn: false,
  token: null,
  isRefreshing: false,
  haveGoal: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginData: (state, { payload }) => {
      state.token = payload.token;
      state.userData.email = payload.user.email;
      state.userData.name = payload.user.name;
      state.isLoggedIn = true;
    },
    setCurrentGoal: (state, { payload }) => {
      state.haveGoal = true;
    },
    setUser: (state, { payload }) => {
      state.userData.email = payload.email;
      state.userData.name = payload.name;
      state.userData.id = payload._id;
      state.isLoggedIn = true;
      state.haveGoal = payload.haveGoal;
    },
    setLogout: (state, { payload }) => {
      return initialState;
    },
  },
});

export const { setLoginData, setLogout, setUser, setCurrentGoal } =
  authSlice.actions;

export default authSlice.reducer;
