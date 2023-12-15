import PropTypes from "prop-types";
import { useState, useEffect } from 'react'
import { useMatchMedia } from "helpers/mediaQuery";

import CategoryLibrary from "components/common/сategoryLibrary/CategoryLibrary";

import { useGetBookQuery } from "redux/book/booksApiSlice";

import { StyledLibralyPage } from "./StyledLibralyPage";
import LinkPageAdd from "components/common/LinkPageAdd";
import FormAddBook from "components/common/formAddBook/FormAddBook";
import EmptySteps from "components/common/EmptySteps";

const LibraryPage = () => {
  const [books, setBooks] = useState(null || []);
  const [isReadBooks, setIsReadBooks] = useState([])
  const [isWantReadToBooks, setWantReadToBooks] = useState([])
  const [isReadingBooks, setIsReadingBooks] = useState([])
  const { isMobile, isTablet, isDesktop } = useMatchMedia()
  
  const { data } = useGetBookQuery();
  console.log(data)

    useEffect(() => {
        import('./books.json')
            .then((data) => { setBooks(data.books) })
            .catch((error) => { console.error('Ошибка') });
    }, [])

  useEffect(() => {
    if (books) {
      const readingBooks = books.filter((book) => book.rating === "Вже прочитано");
      setIsReadingBooks(readingBooks);
      const readBooks = books.filter((book) => book.rating === "Читаю")
      setIsReadBooks(readBooks);
      const wantRead = books.filter((book) => book.rating === "Маю намір прочитати")
      setWantReadToBooks(wantRead);
    }
  }, [books]);



  return isMobile ? (<StyledLibralyPage>
    <CategoryLibrary
      isReadingBooks={isReadingBooks}
      isReadBooks={isReadBooks}
      isWantReadToBooks={isWantReadToBooks} />
    <LinkPageAdd />
  </StyledLibralyPage>)
    : (<StyledLibralyPage>
      <FormAddBook />
      {books ? (<CategoryLibrary
      isReadingBooks={isReadingBooks}
      isReadBooks={isReadBooks}
      isWantReadToBooks={isWantReadToBooks} />):(<EmptySteps />)}
  </StyledLibralyPage>);
};

LibraryPage.propTypes = {};

export default LibraryPage;
