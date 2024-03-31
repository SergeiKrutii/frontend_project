import { apiSlice } from "app/api/apiSlice";
import { achievedGoal, clearGoal, setGoal } from "./goalsSlice";
import { setCurrentGoal } from "redux/auth/authSlice";

export const goalSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addGoal: builder.mutation({
      query: (goal) => ({
        url: "/goals",
        method: "POST",
        body: goal,
      }),
      invalidatesTags: ["Goal"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setGoal(data));
          dispatch(setCurrentGoal(true));
        } catch (error) {
          //error processed in api
        }
      },
    }),
    getGoal: builder.query({
      query: () => ({
        url: "/goals",
        method: "GET",
      }),
      providesTags: ["Goal"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setGoal(data));
          dispatch(setCurrentGoal(true));
        } catch (error) {
          //error processed in api
        }
      },
    }),
    achievedGoal: builder.mutation({
      query: ({ goalId, result }) => ({
        url: `/goals/${goalId}`,
        method: "PATCH",
        body: result,
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(achievedGoal(data));
          dispatch(setCurrentGoal(false));
        } catch (error) {
          //error processed in api
        }
      },
    }),
  }),
});

export const { useAddGoalMutation, useGetGoalQuery, useAchievedGoalMutation } =
  goalSlice;
