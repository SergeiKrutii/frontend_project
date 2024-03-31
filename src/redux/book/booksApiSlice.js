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
      providesTags: ["Books"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setBooks(data));
        } catch (error) {
          //error processed in api
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
          //error processed in api
        }
      },
    }),
    getBookById: builder.query({
      query: (id, newData) => ({
        url: `/books/${id}`,
        method: "GET",
        body: newData,
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setBooks(data));
        } catch (error) {
          //error processed in api
        }
      },
    }),
    updateStatusBook: builder.mutation({
      query: ({ id, rating }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: rating,
      }),
      invalidatesTags: ["Books"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(updateBooksFroGoal(data));
        } catch (error) {
          //error processed in api
        }
      },
    }),
    setBookRating: builder.mutation({
      query: (bookReview) => ({
        url: `/books/${bookReview.id}`,
        method: "PUT",
        body: `${bookReview.review}`,
      }),
      invalidatesTags: ["Books"],
      async onQueryStarted(id, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          //error processed in api
        }
      },
    }),
  }),
});

export const {
  useGetBookQuery,
  useAddBookMutation,
  useGetBookByIdQuery,
  useUpdateStatusBookMutation,
  useSetBookRatingMutation,
} = bookSlice;
