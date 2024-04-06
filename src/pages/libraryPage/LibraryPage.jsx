import { useState, useEffect } from "react";
import { useMatchMedia } from "helpers/mediaQuery";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import CategoryLibrary from "components/сategoryLibrary";
import { useGetBookQuery } from "redux/book/booksApiSlice";
import { StyledLibralyPage } from "./StyledLibralyPage";
import LinkPageAdd from "components/common/linkPageAdd";
import FormAddBook from "components/common/formAddBook";
import EmptySteps from "components/emptySteps";
import Container from "components/common/container";
import Loader from "components/common/loader";

const LibraryPage = () => {
  const [isReadBooks, setIsReadBooks] = useState([]);
  const [isWantReadToBooks, setWantReadToBooks] = useState([]);
  const navigate = useNavigate();

  const [isReadingBooks, setIsReadingBooks] = useState([]);
  const { isMobile } = useMatchMedia();

  const { data: books, isLoading, isFetching } = useGetBookQuery();

  useEffect(() => {
    if (isMobile && books?.length === 0) navigate("/addbook");

    if (books) {
      const readingBooks = books?.filter(
        (book) => book.status === "Вже прочитано"
      );
      setIsReadingBooks(readingBooks);
      const readBooks = books?.filter((book) => book.status === "Читаю");
      setIsReadBooks(readBooks);
      const wantRead = books?.filter(
        (book) => book.status === "Маю намір прочитати"
      );
      setWantReadToBooks(wantRead);
    }
  }, [books]);

  return isMobile ? (
    <>
      {isLoading || isFetching ? (
        <Loader className="showcase-item__new-loader" />
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
        <Loader className="showcase-item__new-loader" />
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
