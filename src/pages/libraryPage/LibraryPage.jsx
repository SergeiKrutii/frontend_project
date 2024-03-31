import { useState, useEffect } from "react";
import { useMatchMedia } from "helpers/mediaQuery";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";

import CategoryLibrary from "components/сategoryLibrary";
import { useGetBookQuery } from "redux/book/booksApiSlice";
import { StyledLibralyPage } from "./StyledLibralyPage";
import LinkPageAdd from "components/common/linkPageAdd";
import FormAddBook from "components/common/formAddBook";
import EmptySteps from "components/emptySteps";
import booksSelectors from "redux/book/booksSelectors";
import Container from "components/common/container";
import Loader from "components/common/loader";

const LibraryPage = () => {
  const isHaveBooks = useSelector(booksSelectors.selectHaveBooks);

  const [isReadBooks, setIsReadBooks] = useState([]);
  const [isWantReadToBooks, setWantReadToBooks] = useState([]);

  const [isReadingBooks, setIsReadingBooks] = useState([]);
  const { isMobile } = useMatchMedia();

  const { data: books, isLoading } = useGetBookQuery({
    skip: !isHaveBooks,
  });

  useEffect(() => {
    if (books) {
      const readingBooks = books.filter(
        (book) => book.status === "Вже прочитано"
      );
      setIsReadingBooks(readingBooks);
      const readBooks = books.filter((book) => book.status === "Читаю");
      setIsReadBooks(readBooks);
      const wantRead = books.filter(
        (book) => book.status === "Маю намір прочитати"
      );
      setWantReadToBooks(wantRead);
    }
  }, [books]);

  return isMobile ? (
    <>
      {isLoading ? (
        <HashLoader
          color="#FF6B08"
          size={200}
          cssOverride={{ marginTop: "130px", marginLeft: "70px" }}
        />
      ) : (
        <StyledLibralyPage
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CategoryLibrary
            isReadingBooks={isReadingBooks}
            isReadBooks={isReadBooks}
            isWantReadToBooks={isWantReadToBooks}
          />
          <LinkPageAdd page={"/addbook"} />
        </StyledLibralyPage>
      )}
    </>
  ) : (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <StyledLibralyPage
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FormAddBook />
          {books?.length !== 0 ? (
            <CategoryLibrary
              isReadingBooks={isReadingBooks}
              isReadBooks={isReadBooks}
              isWantReadToBooks={isWantReadToBooks}
            />
          ) : (
            <EmptySteps />
          )}
        </StyledLibralyPage>
      )}
    </Container>
  );
};

export default LibraryPage;
