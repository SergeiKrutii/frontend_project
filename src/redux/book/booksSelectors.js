const selectAllBooks = (state) => state.books;
const selectHaveBooks = (state) => state.books.haveBooks;

const booksSelectors = { selectAllBooks, selectHaveBooks };

export default booksSelectors;
