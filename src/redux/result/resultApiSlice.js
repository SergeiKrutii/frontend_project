import { apiSlice } from "app/api/apiSlice";

export const resultSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addResult: builder.mutation({
      query: (result) => ({
        url: "/result",
        method: "POST",
        body: result,
      }),
      invalidatesTags: ["Results"],
      async onQueryStarted(id, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getResult: builder.query({
      query: () => ({
        url: "/result",
        method: "GET",
      }),
      providesTags: ["Results"],
      async onQueryStarted(id, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useAddResultMutation, useGetResultQuery } = resultSlice;
