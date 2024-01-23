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
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetBookQuery } from "redux/book/booksApiSlice";
import LibraryBookItem from "components/common/libraryBookItem/LibraryBookItem";
import ChapterLibrary from "components/common/chapterLibrary/ChapterLibrary";
import BookItemTmp from "components/common/LibraryBookItemMob/BookItemTmp/BookItemTmp";
import TmpLibraryBookItemDesk from "components/LibraryBookItemDesk/TmpLibraryBookItemDesk/TmpLibraryBookItemDesk";
import AddTraningForm from "components/AddTraningForm/AddTraningForm";
import { useAddGoalMutation, useGetGoalQuery } from "redux/goal/goalsApiSlice";
import goalsSelectors from "redux/goal/goalsSelectors";
import { useGetResultQuery } from "redux/result/resultApiSlice";

const TraningPage = ({ booksForGoal, handleDelete, dateDiff }) => {
  const [booksIdForGoals, setBooksIdForGoals] = useState([]);
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const token = useSelector(authSelectors.selectToken);
  const isTraningBegin = useSelector(goalsSelectors.selectIsTraningBegin);
  const beginDate = useSelector(goalsSelectors.selectBeginDate);
  const endDate = useSelector(goalsSelectors.selectEndDate);
  const haveGoal = useSelector(authSelectors.selectHaveGoal);

  const { data: results } = useGetResultQuery(undefined, {
    skip: !isTraningBegin,
  });
  const { data: books } = useGetBookQuery(token ?? skipToken);
  const { data: goal } = useGetGoalQuery(undefined, { skip: !haveGoal });

  const [addGoal, { data }] = useAddGoalMutation();

  const untilGoalAchieved =
    endDate &&
    beginDate &&
    (new Date(endDate) - new Date(beginDate)) / (1000 * 60 * 60 * 24);

  const pagePerDay = Math.ceil(
    booksForGoal?.length === 0
      ? goal?.updatedBooks.reduce(
          (acc, elem) => acc + elem.amount_page / untilGoalAchieved,
          0
        )
      : booksForGoal?.reduce(
          (acc, elem) => acc + elem.amount_page / dateDiff,
          0
        )
  );

  const booksFromNewGoal =
    booksForGoal?.length === 0 ? goal?.updatedBooks : booksForGoal;

  function handleStartTraning(books, startDate, endDate) {
    const newGoal = {
      booksId: books?.map((book) => book._id),
      startDate,
      endDate,
    };
    addGoal(newGoal);
  }

  const currentYear = new Date(
    new Date().getFullYear(),
    11,
    31,
    23,
    59,
    59,
    999
  );

  const allBooksPages = goal?.updatedBooks?.reduce(
    (acc, { amount_page }) => acc + amount_page,
    0
  );

  const allResultPages = results?.reduce(
    (acc, { pageAmount }) => acc + Number(pageAmount),
    0
  );

  ////////////////////////////////////////////////////////////////////////////
  const traningBooks = books?.find(
    (book) => book._id === booksIdForGoals.booksId
  );
  const mobMarcup = (
    <Container>
      <StyledTraningPage>
        {isTraningBegin && (
          <StyledTraningTimerWrapper>
            <Timer
              title={"До закінчення року залишилось"}
              deadline={currentYear}
            />
            <Timer title={"До досягнення мети залишилось"} />
          </StyledTraningTimerWrapper>
        )}
        <MyGoals books={booksForGoal} dateDiff={dateDiff} />
        <SpriteIcon name={"icon_traningLine"} />
        <ChapterLibrary
          books={booksFromNewGoal}
          handleDelete={handleDelete}
          handleStartTraning={handleStartTraning}
        />
        <Chart pagePerDay={pagePerDay} results={results} />
        {isTraningBegin && <AddResult results={results} />}
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
      <MyGoals books={booksIdForGoals} />
      {isTraningBegin && (
        <StyledTraningTimerWrapper $timer={isTraningBegin}>
          <Timer
            title={"До закінчення року залишилось"}
            style={{ marginRight: "30px" }}
          />
          <Timer title={"До досягнення мети залишилось"} />
        </StyledTraningTimerWrapper>
      )}
      <AddTraningForm setGoalBooks={setBooksIdForGoals} books={books} />

      <ChapterLibrary books={traningBooks} />

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
          {isTraningBegin && (
            <StyledTraningTimerWrapper>
              <Timer
                title={"До закінчення року залишилось"}
                style={{ marginRight: "30px" }}
              />
              <Timer title={"До досягнення мети залишилось"} />
            </StyledTraningTimerWrapper>
          )}
          <AddTraningForm />

          {books?.map((book) => {
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
