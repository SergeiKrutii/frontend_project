import { apiSlice } from "app/api/apiSlice";

import { setBooks } from "./booksSlice";

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

		deleteBookId: builder.mutation({
			query: (id) => ({
				url: `/books/${id}`,
				method: "GET",
			}),
			providesTags: ["Books"],
		}),

		getBookId: builder.mutation({
			query: (id) => ({
				url: `/books/${id}`,
				method: "GET",
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
	}),
});

export const { useGetBookQuery, useAddBookMutation, useDeleteBookIdMutation } =
	bookSlice;
