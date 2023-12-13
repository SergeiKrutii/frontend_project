import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userData: { name: "", email: null, id: null, books: [] },
	isLoggedIn: false,
	token: "",
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
			// console.log("🚀 ~ payload: CURRENT", payload);
			// state.userData.email = payload.user.email;
		},
		setLogout: (state, { payload }) => {
			return initialState;
		},
	},
});

export const { setLoginData, setLogout, setUser } = authSlice.actions;

export default authSlice.reducer;
