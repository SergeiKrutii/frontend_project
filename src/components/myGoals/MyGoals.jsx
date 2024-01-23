import PropTypes from "prop-types";

import {
  StyledGoalsWrapper,
  StyledGoalsTitle,
  StyledGoalsCountWrapper,
  StyledGoalsContainer,
  StyledGoalsCount,
  StyledGoalsText,
} from "./StyledMyGoals";
import { GoalsProvider } from "./goalsContext";
import goalsSelectors from "redux/goal/goalsSelectors";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useAchievedGoalMutation } from "redux/goal/goalsApiSlice";
import authSelectors from "redux/auth/authSelectors";
import booksSelectors from "redux/book/booksSelectors";

const MyGoals = ({ books, dateDiff }) => {
  const isTraningBegin = useSelector(goalsSelectors.selectIsTraningBegin);
  const haveGoal = useSelector(authSelectors.selectHaveGoal);
  const haveBooks = useSelector(booksSelectors.selectHaveBooks);
  const booksForGoals = useSelector(goalsSelectors.selectBooksForGoal);
  const isAchieved = useSelector(goalsSelectors.selectGoalAchiv);
  const unreadBooksForGoal = useSelector(
    goalsSelectors.selectUnreadBooksForGoal
  );

  const beginDate = useSelector(goalsSelectors.selectBeginDate);
  const endDate = useSelector(goalsSelectors.selectEndDate);
  const id = useSelector(goalsSelectors.selectGoalId);

  const [achievedGoal] = useAchievedGoalMutation();

  const shouldAcheveGoal =
    unreadBooksForGoal?.length === 0 &&
    isTraningBegin &&
    haveGoal &&
    haveBooks &&
    !isAchieved;

  useEffect(() => {
    if (shouldAcheveGoal) {
      achievedGoal({ goalId: id, result: { isGoalAchieved: true } });
    }
  }, [achievedGoal, id, shouldAcheveGoal]);
  // isGoalTimeOut: true || isGoalAchieved: true
  const timeForGoalLeft =
    endDate &&
    beginDate &&
    (new Date(endDate) - new Date(beginDate)) / (1000 * 60 * 60 * 24);

  const booksQuantity = isTraningBegin
    ? unreadBooksForGoal?.length
    : books?.length;

  const amountDays = dateDiff !== 0 ? timeForGoalLeft : 0;

  return (
    <ThemeProvider theme={{ isTraning: isTraningBegin }}>
      <StyledGoalsWrapper>
        <StyledGoalsTitle>Моя мета прочитати</StyledGoalsTitle>
        <StyledGoalsCountWrapper>
          <StyledGoalsContainer>
            <StyledGoalsCount>{booksForGoals?.length}</StyledGoalsCount>
            <StyledGoalsText>Кількість книжок</StyledGoalsText>
          </StyledGoalsContainer>
          <StyledGoalsContainer>
            <StyledGoalsCount>
              {booksQuantity === 0 ? "0" : amountDays}
            </StyledGoalsCount>
            <StyledGoalsText>Кількість днів</StyledGoalsText>
          </StyledGoalsContainer>
          {isTraningBegin && (
            <StyledGoalsContainer>
              <StyledGoalsCount className="booksCount">
                {booksQuantity}
              </StyledGoalsCount>
              <StyledGoalsText>Залишилось книжок</StyledGoalsText>
            </StyledGoalsContainer>
          )}
        </StyledGoalsCountWrapper>
      </StyledGoalsWrapper>
    </ThemeProvider>
  );
};

MyGoals.propTypes = {
  books: PropTypes.array,
};

export default MyGoals;
