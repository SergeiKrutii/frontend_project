import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import ChapterLibrary from "../chapterLibrary";
import {
  StyledCategotyLibrary,
  StyledCategoryTitle,
  StyledCategoryItemBox,
  StyledCategoryLink,
} from "./StyledCategoryLibrary";
import booksSelectors from "redux/book/booksSelectors";

const CategoryLibrary = ({
  isReadingBooks,
  isReadBooks,
  isWantReadToBooks,
}) => {
  const { pathname } = useLocation();
  const books = useSelector(booksSelectors.selectAllBooks);

  return (
    <StyledCategotyLibrary>
      {isReadingBooks.length !== 0 && (
        <StyledCategoryItemBox>
          <StyledCategoryTitle>Прочитано</StyledCategoryTitle>
          <ChapterLibrary title="Вже прочитано" books={isReadingBooks} />
        </StyledCategoryItemBox>
      )}
      {isReadBooks.length !== 0 && (
        <StyledCategoryItemBox>
          <StyledCategoryTitle>Читаю</StyledCategoryTitle>
          <ChapterLibrary title="Читаю" books={isReadBooks} />
        </StyledCategoryItemBox>
      )}

      <StyledCategoryItemBox>
        <StyledCategoryTitle>Маю намір прочитати</StyledCategoryTitle>
        <ChapterLibrary title="Маю намір прочитати" books={isWantReadToBooks} />
      </StyledCategoryItemBox>
      {books?.length !== 0 && pathname === "/library" && (
        <StyledCategoryLink to={"/traning"}>Далі</StyledCategoryLink>
      )}
    </StyledCategotyLibrary>
  );
};

CategoryLibrary.propTypes = {
  isReadingBooks: PropTypes.arrayOf(PropTypes.object),
  isReadBooks: PropTypes.arrayOf(PropTypes.object),
  isWantReadToBooks: PropTypes.arrayOf(PropTypes.object),
};

export default CategoryLibrary;
