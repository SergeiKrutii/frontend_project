import React from "react";
import PropTypes from "prop-types";

import { useState, useEffect } from "react";

import { useMatchMedia } from "helpers/mediaQuery";
import LibraryBookItem from "../libraryBookItem/LibraryBookItem";
import {
  StyledChapterLibrary,
  StyledChapterLibraryTableDesk,
  StyledPillarTitle,
  StyledPillarAuthor,
  StyledPillarDate,
  StyledPillarPage,
  StyledPillarRating,
  StyledPillarButton,
  StyledText,
  StyledChapterButton,
} from "./StyledChapterLibrary";
import goalsSelectors from "redux/goal/goalsSelectors";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import TmpLibraryBookItemDesk from "components/LibraryBookItemDesk/TmpLibraryBookItemDesk/TmpLibraryBookItemDesk";
import BookItemTmp from "../LibraryBookItemMob/BookItemTmp/BookItemTmp";
import { endOfDay } from "date-fns";

const ChapterLibrary = ({ books = [], handleDelete, handleStartTraning }) => {
  const { isMobile } = useMatchMedia();
  const [ifResTrue, setifResTrue] = useState(false);
  const { pathname } = useLocation();

  const beginDate = useSelector(goalsSelectors.selectBeginDate);
  const endDate = useSelector(goalsSelectors.selectEndDate);
  const isTraningBegin = useSelector(goalsSelectors.selectIsTraningBegin);

  const isButtonVisible =
    pathname === "/traning" && books.length !== 0 && !isTraningBegin;

  useEffect(() => {
    if (books?.length > 0 && books[0].rating === "Вже прочитано") {
      setifResTrue(true);
    }
  }, [books]);

  return isMobile ? (
    <StyledChapterLibrary>
      {books?.length === 0 ? (
        <BookItemTmp />
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
            {ifResTrue && (
              <StyledPillarRating>
                <StyledText>Рейтинг</StyledText>
              </StyledPillarRating>
            )}
            {ifResTrue && <StyledPillarButton></StyledPillarButton>}
          </tr>
        </tbody>
      </StyledChapterLibraryTableDesk>
      {books?.length === 0 ? (
        <TmpLibraryBookItemDesk />
      ) : (
        books?.map((book) => {
          return (
            <LibraryBookItem
              $ifrestrue={ifResTrue}
              key={book.title}
              book={book}
            />
          );
        })
      )}
      {books?.length !== 0 && (
        <StyledChapterButton
          type="button"
          onClick={() => handleStartTraning(books, beginDate, endDate)}
        >
          Почати тренування
        </StyledChapterButton>
      )}
    </>
  );
};

ChapterLibrary.propTypes = {};

export default ChapterLibrary;
