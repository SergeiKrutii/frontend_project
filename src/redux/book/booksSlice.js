import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setBooks: (state, { payload }) => {
      state.newIncTransaction = payload;
    },
  },
});

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;
