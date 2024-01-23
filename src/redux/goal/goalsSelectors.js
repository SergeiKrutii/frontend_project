import { createSelector } from "@reduxjs/toolkit";

const selectBeginDate = (state) => state.goal.beginDate;
const selectEndDate = (state) => state.goal.endDate;
const selectIsTraningBegin = (state) => state.goal.isTraningBegin;
const selectBooksForGoal = (state) => state.goal.booksForGoal;
const selectUnreadBooksForGoal = createSelector(
  [selectBooksForGoal],
  (books) => {
    return books.filter((book) => book.isRead === false);
  }
);
const selectGoalId = (state) => state.goal.goalId;
const selectGoalAchiv = (state) => state.goal.isGoalAchieved;
const selectTimeOut = (state) => state.goal.isGoalTimeOut;

const goalsSelectors = {
  selectBeginDate,
  selectEndDate,
  selectIsTraningBegin,
  selectBooksForGoal,
  selectGoalId,
  selectUnreadBooksForGoal,
  selectGoalAchiv,
  selectTimeOut,
};

export default goalsSelectors;
