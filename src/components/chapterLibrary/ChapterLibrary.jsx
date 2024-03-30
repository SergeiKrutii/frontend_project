import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useMatchMedia } from "helpers/mediaQuery";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import LibraryBookItem from "../common/libraryBookItem";
import {
  StyledChapterLibrary,
  StyledChapterLibraryTableDesk,
  StyledPillarTitle,
  StyledPillarAuthor,
  StyledPillarDate,
  StyledPillarPage,
  StyledPillarRating,
  StyledText,
  StyledChapterButton,
  StyledChapterLibraryWrapper,
  StyledBookItemWrapper,
} from "./StyledChapterLibrary";
import goalsSelectors from "redux/goal/goalsSelectors";
import TmpLibraryBookItemDesk from "../libraryBookItemDesk/TmpLibraryBookItemDesk";
import TmpLibraryBookItemMob from "../common/libraryBookItemMob/tmpLibraryBookItemMob";
import booksSelectors from "redux/book/booksSelectors";

const ChapterLibrary = ({
  books = [],
  handleDelete,
  handleStartTraning,
  title = "",
}) => {
  const [booksForGoal, setBooksForGoal] = useState([]);
  const { isMobile } = useMatchMedia();

  const { pathname } = useLocation();

  const beginDate = useSelector(goalsSelectors.selectBeginDate);
  const endDate = useSelector(goalsSelectors.selectEndDate);
  const isTraningBegin = useSelector(goalsSelectors.selectIsTraningBegin);
  const booksForGoals = useSelector(goalsSelectors.selectBooksForGoal);
  const isReadBooks = useSelector(booksSelectors.selectIsReadBooks);

  const isButtonVisible =
    pathname === "/traning" && books.length !== 0 && !isTraningBegin;
  const isRatingShow = isReadBooks?.length !== 0 && title === "Вже прочитано";

  const shuldVisibleTmp = booksForGoal?.length === 0 && books?.length === 0;

  useEffect(() => {
    setBooksForGoal(books);

    if (books?.length === 0) {
      setBooksForGoal(booksForGoals);
    }
  }, [books, booksForGoals]);

  return isMobile ? (
    <StyledChapterLibrary>
      {books?.length === 0 ? (
        <TmpLibraryBookItemMob />
      ) : (
        books?.map((book, idx) => {
          return (
            <LibraryBookItem
              key={`${book.title}${idx}`}
              book={book}
              handleDelete={handleDelete}
            />
          );
        })
      )}
      {isButtonVisible && (
        <StyledChapterButton
          type="button"
          onClick={() => handleStartTraning(books, beginDate, endDate)}
        >
          Почати тренування
        </StyledChapterButton>
      )}
    </StyledChapterLibrary>
  ) : (
    <>
      <ThemeProvider
        theme={{ section: title === "Вже прочитано", page: pathname }}
      >
        <StyledChapterLibraryTableDesk>
          <tbody>
            <tr>
              <StyledPillarTitle>
                <StyledText>Назва книги</StyledText>
              </StyledPillarTitle>
              <StyledPillarAuthor>
                <StyledText>Автор</StyledText>
              </StyledPillarAuthor>
              <StyledPillarDate>
                <StyledText>Рік</StyledText>
              </StyledPillarDate>
              <StyledPillarPage>
                <StyledText>Стор.</StyledText>
              </StyledPillarPage>
              {isRatingShow && (
                <StyledPillarRating>
                  <StyledText>Рейтинг</StyledText>
                </StyledPillarRating>
              )}
            </tr>
          </tbody>
        </StyledChapterLibraryTableDesk>
        <StyledChapterLibraryWrapper>
          {shuldVisibleTmp ? (
            <TmpLibraryBookItemDesk />
          ) : (
            <StyledBookItemWrapper>
              {booksForGoal?.map((book, idx) => {
                return (
                  <LibraryBookItem
                    key={`${book.title}${idx}`}
                    book={book}
                    handleDelete={handleDelete}
                  />
                );
              })}
            </StyledBookItemWrapper>
          )}
          {isButtonVisible && (
            <StyledChapterButton
              type="button"
              onClick={() => handleStartTraning(books, beginDate, endDate)}
            >
              Почати тренування
            </StyledChapterButton>
          )}
        </StyledChapterLibraryWrapper>
      </ThemeProvider>
    </>
  );
};

ChapterLibrary.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  handleDelete: PropTypes.func,
  handleStartTraning: PropTypes.func,
  title: PropTypes.string,
};

export default ChapterLibrary;
