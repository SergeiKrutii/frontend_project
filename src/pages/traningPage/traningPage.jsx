import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useAddGoalMutation, useGetGoalQuery } from "redux/goal/goalsApiSlice";
import authSelectors from "redux/auth/authSelectors";
import goalsSelectors from "redux/goal/goalsSelectors";
import { useGetResultQuery } from "redux/result/resultApiSlice";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetBookQuery } from "redux/book/booksApiSlice";
import MyGoals from "components/myGoals";
import ChapterLibrary from "components/chapterLibrary";
import AddTraningForm from "components/addTraningForm";
import MainModal from "components/common/mainModal";
import { NiceJob, BetterNextTime } from "components/common/contentForModal";
import Chart from "components/chart";
import Container from "components/common/container";
import SpriteIcon from "components/common/spriteIcon";
import { useMatchMedia } from "helpers/mediaQuery";
import {
  StyledTraningPage,
  StyledTraningTimerWrapper,
} from "./StyledTraningPage";
import Timer from "components/timer";
import AddResult from "components/addResult";
import Loader from "components/common/loader/Loader";

const TraningPage = ({ booksForGoal, handleDelete, dateDiff, setDateDiff }) => {
  const [booksIdForGoals, setBooksIdForGoals] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const { pathname } = useLocation();
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const token = useSelector(authSelectors.selectToken);
  const haveGoal = useSelector(authSelectors.selectHaveGoal);

  const isTraningBegin = useSelector(goalsSelectors.selectIsTraningBegin);
  const beginDate = useSelector(goalsSelectors.selectBeginDate);
  const endDate = useSelector(goalsSelectors.selectEndDate);
  const isTimeOut = useSelector(goalsSelectors.selectTimeOut);
  const isShowModal = useSelector(goalsSelectors.selectIsShowModal);

  const shuldFetch = !haveGoal;

  useEffect(() => {
    setToggleModal(isShowModal);
  }, [isShowModal]);

  const { data: results } = useGetResultQuery(undefined, {
    skip: !isTraningBegin,
  });
  const { data: books, isLoading } = useGetBookQuery(token ?? skipToken);
  const { data: goal, isFetching } = useGetGoalQuery(undefined, {
    skip: shuldFetch,
  });

  const [addGoal] = useAddGoalMutation();

  const deleteTentativeBook = (bookId) => {
    const filteredBooks = booksIdForGoals.filter((book) => book._id !== bookId);
    setBooksIdForGoals(filteredBooks);
  };

  const defineVariableBySize =
    isTablet || isDesktop ? booksIdForGoals : booksForGoal;

  const untilGoalAchieved =
    endDate &&
    beginDate &&
    (new Date(endDate) - new Date(beginDate)) / (1000 * 60 * 60 * 24);

  const pagePerDay = Math.ceil(
    isTraningBegin
      ? goal?.updatedBooks.reduce(
          (acc, elem) => acc + elem.amount_page / untilGoalAchieved,
          0
        )
      : defineVariableBySize?.reduce(
          (acc, elem) => acc + elem.amount_page / dateDiff,
          0
        )
  );

  const booksFromNewGoalMob =
    booksForGoal?.length === 0 ? goal?.updatedBooks : booksForGoal;

  const booksFromNewGoalTabl =
    booksIdForGoals?.length === 0 ? goal?.updatedBooks : booksIdForGoals;

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

  const mobMarcup = (
    <>
      {isLoading || isFetching ? (
        <Loader className="showcase-item__new-loader" />
      ) : (
        <StyledTraningPage
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
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
                books={booksFromNewGoalMob}
                handleDelete={handleDelete}
                handleStartTraning={handleStartTraning}
              />
              <Chart pagePerDay={pagePerDay} results={results} />
              {isTraningBegin && <AddResult results={results} />}
            </StyledTraningPage>
          </Container>
        </StyledTraningPage>
      )}
    </>
  );

  const tabletMarcup = (
    <Container>
      <StyledTraningPage
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1, transition: { duration: 0.1 } }}
      >
        {isLoading || isFetching ? (
          <Loader className="showcase-item__new-loader" />
        ) : (
          <>
            <MyGoals books={booksIdForGoals} />
            {isTraningBegin && (
              <StyledTraningTimerWrapper $timer={isTraningBegin}>
                <Timer
                  title={"До закінчення року залишилось"}
                  deadline={currentYear}
                  style={{ marginRight: "30px" }}
                />
                <Timer title={"До досягнення мети залишилось"} />
              </StyledTraningTimerWrapper>
            )}
            <AddTraningForm
              setGoalBooks={setBooksIdForGoals}
              books={books}
              setDateDiff={setDateDiff}
            />

            <ChapterLibrary
              handleDelete={deleteTentativeBook}
              books={booksFromNewGoalTabl}
              handleStartTraning={handleStartTraning}
              condition={pathname}
            />

            <Chart pagePerDay={pagePerDay} results={results} />
            {isTraningBegin && <AddResult results={results} />}
          </>
        )}
      </StyledTraningPage>
    </Container>
  );

  const desctopMarcup = (
    <Container style={{ marginBottom: "50px" }}>
      <StyledTraningPage>
        {isLoading ? (
          <Loader className="showcase-item__new-loader" />
        ) : (
          <>
            <div
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1, transition: { duration: 1 } }}
            >
              {isTraningBegin && (
                <StyledTraningTimerWrapper>
                  <Timer
                    title={"До закінчення року залишилось"}
                    deadline={currentYear}
                    style={{ marginRight: "30px" }}
                  />
                  <Timer title={"До досягнення мети залишилось"} />
                </StyledTraningTimerWrapper>
              )}
              {!haveGoal && (
                <AddTraningForm
                  setGoalBooks={setBooksIdForGoals}
                  books={books}
                  setDateDiff={setDateDiff}
                />
              )}

              <ChapterLibrary
                handleDelete={deleteTentativeBook}
                books={booksFromNewGoalTabl}
                handleStartTraning={handleStartTraning}
              />
              <Chart pagePerDay={pagePerDay} results={results} />
            </div>
            <div style={{ marginLeft: "41px" }}>
              <MyGoals books={booksIdForGoals} />
              {isTraningBegin && <AddResult results={results} />}
            </div>
          </>
        )}
      </StyledTraningPage>
    </Container>
  );

  return (
    <>
      {isMobile && mobMarcup}
      {isTablet && tabletMarcup}
      {isDesktop && desctopMarcup}
      {toggleModal && <MainModal open={toggleModal} component={<NiceJob />} />}
      {toggleModal && isTimeOut && (
        <MainModal open={toggleModal} component={<BetterNextTime />} />
      )}
    </>
  );
};

TraningPage.propTypes = {
  booksForGoal: PropTypes.arrayOf(PropTypes.object),
  handleDelete: PropTypes.func,
  dateDiff: PropTypes.number,
  setDateDiff: PropTypes.func,
};

export default TraningPage;
