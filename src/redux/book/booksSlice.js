import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	books: [],
};

const booksSlice = createSlice({
	name: "books",
	initialState,
	reducers: {
		setBooks: (state, { payload }) => {
			state.books = payload;
		},
	},
});

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;
