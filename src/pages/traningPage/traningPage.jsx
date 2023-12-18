import PropTypes from "prop-types";
import { motion } from "framer-motion";
import MyGoals from "components/myGoals/MyGoals";
import Chart from "components/Chart/Chart";
import Container from "components/common/container";
import AddTraningMobPage from "./addTraningMob/AddTraningMobPage";
import SpriteIcon from "components/common/spriteIcon";
import { useMatchMedia } from "helpers/mediaQuery";
import {
  StyledTraningPage,
  StyledTraningPageWrapper,
  StyledTraningTimerWrapper,
} from "./StyledTraningPage";
import Timer from "components/timer/Timer";
import AddResult from "components/addResult/AddResult";
import LibraryBookItemMob from "components/common/LibraryBookItemMob";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import LibraryBookItem from "components/common/libraryBookItem/LibraryBookItem";
import { useGetBookQuery } from "redux/book/booksApiSlice";
import ChapterLibrary from "components/common/chapterLibrary/ChapterLibrary";
import BookItemTmp from "components/common/LibraryBookItemMob/BookItemTmp/BookItemTmp";
import { skipToken } from "@reduxjs/toolkit/query";

const TraningPage = (props) => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const isTimerShow = false;
  const token = useSelector(authSelectors.selectToken);
  const { data: bookss } = useGetBookQuery(token ?? skipToken);

  const start = Date.now();

  const end = (year) => {
    return new Date(year, 11, 31);
  };

  const deadline = new Date(end - start);

  const books = [
    "Властелин колец",
    "Гордость и предубеждение",
    "Тёмные начала",
    "Автостопом по галактике",
  ];

  const mobMarcup = (
    <Container>
      <StyledTraningPage>
        {isTimerShow && (
          <StyledTraningTimerWrapper>
            <Timer title={"До закінчення року залишилось"} />
            <Timer title={"До досягнення мети залишилось"} />
          </StyledTraningTimerWrapper>
        )}
        <MyGoals books={books} />
        <SpriteIcon name={"icon_traningLine"} />
        {books.length === 0 ? (
          <BookItemTmp />
        ) : (
          <ChapterLibrary books={bookss} />
        )}

        <Chart />
        {/* <AddResult /> */}
      </StyledTraningPage>
    </Container>
  );

  const tabletMarcup = (
    <StyledTraningPage
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1, transition: { duration: 0.1 } }}
    >
      <MyGoals books={books} />
      {isTimerShow && (
        <StyledTraningTimerWrapper $timer={isTimerShow}>
          <Timer
            title={"До закінчення року залишилось"}
            style={{ marginRight: "30px" }}
          />
          <Timer title={"До досягнення мети залишилось"} />
        </StyledTraningTimerWrapper>
      )}
      <AddTraningMobPage />
      <ChapterLibrary books={bookss} />
      <Chart />
      {/* <AddResult /> */}
    </StyledTraningPage>
  );

  const desctopMarcup = (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <StyledTraningPage>
        <div>
          {isTimerShow && (
            <StyledTraningTimerWrapper>
              <Timer
                title={"До закінчення року залишилось"}
                style={{ marginRight: "30px" }}
              />
              <Timer title={"До досягнення мети залишилось"} />
            </StyledTraningTimerWrapper>
          )}
          <AddTraningMobPage />

          {bookss?.map((book) => {
            return <LibraryBookItem key={book.title} book={book} />;
          })}

          <Chart />
        </div>
        <div style={{ marginLeft: "41px" }}>
          <MyGoals books={books} />
          <AddResult />
        </div>
      </StyledTraningPage>
    </Container>
  );

  return (
    <>
      {isMobile ? mobMarcup : null}
      {isTablet ? tabletMarcup : null}
      {isDesktop ? desctopMarcup : null}
    </>
  );
};

TraningPage.propTypes = {};

export default TraningPage;
