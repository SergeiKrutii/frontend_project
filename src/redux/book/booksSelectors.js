import { createSelector } from "@reduxjs/toolkit";

const selectAllBooks = (state) => state.books.books;
const selectHaveBooks = (state) => state.books.haveBooks;

const selectIsReadBooks = createSelector([selectAllBooks], (books) =>
  books?.filter((book) => book.isRead === true)
);

const findBookById = (id) => {
  const selectBook = createSelector([selectAllBooks], (books) =>
    books?.filter((book) => book._id === id)
  );
  return selectBook;
};

const booksSelectors = {
  selectAllBooks,
  selectHaveBooks,
  selectIsReadBooks,
  findBookById,
};

export default booksSelectors;
