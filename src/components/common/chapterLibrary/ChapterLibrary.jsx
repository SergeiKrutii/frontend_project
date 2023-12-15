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
} from "./StyledChapterLibrary";

const ChapterLibrary = ({ books }) => {
  const { isMobile } = useMatchMedia();
  const [ifResTrue, setifResTrue] = useState(false);

  useEffect(() => {
    if (books.length > 0 && books[0].rating === "Вже прочитано") {
      setifResTrue(true);
    }
  }, [books]);

  return isMobile ? (
    <StyledChapterLibrary>
      {books.map((book) => {
        return <LibraryBookItem key={book.title} book={book} />;
      })}
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
      {books.map((book) => {
        return (
          <LibraryBookItem $ifrestrue={ifResTrue} key={book.title} book={book} />
        );
      })}
    </>
  );
};

ChapterLibrary.propTypes = {};

export default ChapterLibrary;
