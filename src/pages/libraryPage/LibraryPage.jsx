import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useMatchMedia } from "helpers/mediaQuery";

import CategoryLibrary from "components/common/сategoryLibrary/CategoryLibrary";

import { useGetBookQuery } from "redux/book/booksApiSlice";
import { motion } from "framer-motion";
import { StyledLibralyPage } from "./StyledLibralyPage";
import LinkPageAdd from "components/common/LinkPageAdd";
import FormAddBook from "components/common/formAddBook/FormAddBook";
import EmptySteps from "components/common/EmptySteps";
import { useSelector } from "react-redux";
import booksSelectors from "redux/book/booksSelectors";
import { skipToken } from "@reduxjs/toolkit/query";

const LibraryPage = () => {
  const isHaveBooks = useSelector(booksSelectors.selectHaveBooks);

  const [books, setBooks] = useState(null || []);
  const [isReadBooks, setIsReadBooks] = useState([]);
  const [isWantReadToBooks, setWantReadToBooks] = useState([]);
  const [isReadingBooks, setIsReadingBooks] = useState([]);
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const { data } = useGetBookQuery(undefined, { skip: !isHaveBooks });

  // useEffect(() => {
  //   import("./books.json")
  //     .then((data) => {
  //       setBooks(data.books);
  //     })
  //     .catch((error) => {
  //       console.error("Ошибка");
  //     });
  // }, []);

  useEffect(() => {
    if (books) {
      const readingBooks = books.filter(
        (book) => book.rating === "Вже прочитано"
      );
      setIsReadingBooks(readingBooks);
      const readBooks = books.filter((book) => book.rating === "Читаю");
      setIsReadBooks(readBooks);
      const wantRead = books.filter(
        (book) => book.rating === "Маю намір прочитати"
      );
      setWantReadToBooks(wantRead);
    }
  }, [books]);

  return isMobile ? (
    <StyledLibralyPage>
      <CategoryLibrary
        isReadingBooks={isReadingBooks}
        isReadBooks={isReadBooks}
        isWantReadToBooks={isWantReadToBooks}
      />
      <LinkPageAdd page={"/addbook"} />
    </StyledLibralyPage>
  ) : (
    <StyledLibralyPage
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <FormAddBook />
      {books ? (
        <CategoryLibrary
          isReadingBooks={isReadingBooks}
          isReadBooks={isReadBooks}
          isWantReadToBooks={isWantReadToBooks}
        />
      ) : (
        <EmptySteps />
      )}
    </StyledLibralyPage>
  );
};

LibraryPage.propTypes = {};

export default LibraryPage;
