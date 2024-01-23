import { apiSlice } from "app/api/apiSlice";
import { setBooks, setHaveBooks } from "./booksSlice";
import { updateBooksFroGoal } from "redux/goal/goalsSlice";

export const bookSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBook: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
      }),
      provaidesTags: ["Books"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setBooks(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    addBook: builder.mutation({
      query: (credentials) => ({
        url: "/books",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["Books"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setBooks(data));
          dispatch(setHaveBooks());
        } catch (error) {
          console.log(error);
        }
      },
    }),

    deleteBookId: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),

    getBookById: builder.query({
      query: (id, newData) => ({
        url: `/books/${id}`,
        method: "GET",
        body: newData,
      }),
      providesTags: ["Books"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setBooks(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    updateStatusBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Books"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(updateBooksFroGoal(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useGetBookQuery,
  useAddBookMutation,
  useDeleteBookIdMutation,
  useGetBookByIdQuery,
  useUpdateStatusBookMutation,
} = bookSlice;
