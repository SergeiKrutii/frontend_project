import { apiSlice } from "app/api/apiSlice";
import { setLoginData, setLogout, setUser } from "./authSlice";
import { clearBooksState } from "redux/book/booksSlice";

export const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: { ...credentials },
      }),

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setLoginData(data));
        } catch (err) {}
      },
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: "/users/signup",
        method: "POST",
        body: { ...credentials },
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {}
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(setLogout());
          dispatch(clearBooksState());
          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState());
          }, 500);
        } catch (err) {}
      },
    }),
    getUser: builder.query({
      query: () => ({
        url: "/users/current",
        method: "GET",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (err) {}
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
  useGetUserQuery,
} = authSlice;
