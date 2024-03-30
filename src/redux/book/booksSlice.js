import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  haveBooks: false,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, { payload }) => {
      state.books = payload;
      state.haveBooks = true;
    },
    updateBookRating: (state, { payload }) => {
      console.log(payload);
    },
    setHaveBooks: (state, { payload }) => {
      state.haveBooks = true;
    },
    clearBooksState: (state, { payload }) => {
      return initialState;
    },
  },
});

export const { setBooks, setHaveBooks, updateBookRating, clearBooksState } =
  booksSlice.actions;

export default booksSlice.reducer;
