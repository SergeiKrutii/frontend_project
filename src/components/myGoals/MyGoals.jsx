import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import {
  StyledGoalsWrapper,
  StyledGoalsTitle,
  StyledGoalsCountWrapper,
  StyledGoalsContainer,
  StyledGoalsCount,
  StyledGoalsText,
} from "./StyledMyGoals";
import goalsSelectors from "redux/goal/goalsSelectors";
import { useAchievedGoalMutation } from "redux/goal/goalsApiSlice";
import authSelectors from "redux/auth/authSelectors";

const MyGoals = ({ books, dateDiff }) => {
  const isTraningBegin = useSelector(goalsSelectors.selectIsTraningBegin);
  const haveGoal = useSelector(authSelectors.selectHaveGoal);
  const booksForGoals = useSelector(goalsSelectors.selectBooksForGoal);
  const isAchieved = useSelector(goalsSelectors.selectGoalAchiv);
  const unreadBooksForGoal = useSelector(
    goalsSelectors.selectUnreadBooksForGoal
  );

  const beginDate = useSelector(goalsSelectors.selectBeginDate);
  const endDate = useSelector(goalsSelectors.selectEndDate);
  const id = useSelector(goalsSelectors.selectGoalId);

  const [achievedGoal] = useAchievedGoalMutation();

  useEffect(() => {
    if (
      unreadBooksForGoal?.length === 0 &&
      isTraningBegin &&
      haveGoal &&
      !isAchieved
    ) {
      achievedGoal({ goalId: id, result: { isGoalAchieved: true } });
    }
  }, [
    achievedGoal,
    haveGoal,
    id,
    isAchieved,
    isTraningBegin,
    unreadBooksForGoal?.length,
  ]);

  const timeForGoalLeft =
    endDate &&
    beginDate &&
    (new Date(endDate) - new Date(beginDate)) / (1000 * 60 * 60 * 24);

  const booksQuantity = isTraningBegin
    ? unreadBooksForGoal?.length
    : books?.length;

  const achievedBooks =
    booksForGoals?.length === 0 ? books?.length : booksForGoals?.length;

  const amountDays = Math.ceil(dateDiff !== 0 ? timeForGoalLeft : 0);

  return (
    <ThemeProvider theme={{ isTraning: isTraningBegin }}>
      <StyledGoalsWrapper>
        <StyledGoalsTitle>Моя мета прочитати</StyledGoalsTitle>
        <StyledGoalsCountWrapper>
          <StyledGoalsContainer>
            <StyledGoalsCount>{achievedBooks}</StyledGoalsCount>
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
  books: PropTypes.arrayOf(PropTypes.object),
  dateDiff: PropTypes.number,
};

export default MyGoals;
