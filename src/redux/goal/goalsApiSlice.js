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
        } catch (error) {
          console.log(error);
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
          dispatch(setCurrentGoal());
        } catch (error) {
          console.log(error);
        }
      },
    }),
    achievedGoal: builder.mutation({
      query: ({ goalId, result }) => ({
        url: `/goals/${goalId}`,
        method: "PATCH",
        body: result,
      }),
      invalidatesTags: ["Goal"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(achievedGoal(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useAddGoalMutation, useGetGoalQuery, useAchievedGoalMutation } =
  goalSlice;
