import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goalId: null,
  beginDate: "",
  endDate: "",
  booksForGoal: [],
  isTraningBegin: false,
  isGoalAchieved: false,
  isGoalTimeOut: false,
  isShowModal: false,
};

const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    setGoal: (state, { payload }) => {
      state.goalId = payload?._id;
      state.beginDate = payload?.startDate;
      state.endDate = payload?.endDate;
      state.booksForGoal = payload?.updatedBooks;
      state.isTraningBegin = true;
    },
    setTime: (state, { payload }) => {
      state.beginDate = payload?.beginDate;
      state.endDate = payload?.endDate;
    },
    updateBooksFroGoal: (state, { payload }) => {
      state.booksForGoal = state.booksForGoal.map((book) =>
        book._id === payload?._id
          ? { ...book, isRead: true, status: "Вже прочитано" }
          : book
      );
    },
    achievedGoal: (state, { payload }) => {
      state.isGoalAchieved = payload.isGoalAchieved;
      state.isGoalTimeOut = payload.isGoalTimeOut;
      state.isShowModal = true;
    },

    clearGoal: (state, { payload }) => {
      return initialState;
    },
  },
});

export const { setGoal, setTime, clearGoal, updateBooksFroGoal, achievedGoal } =
  goalSlice.actions;

export default goalSlice.reducer;
