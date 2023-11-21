import { apiSlice } from "app/api/apiSlice";
import { setLoginData, setLogout, setUser } from "./authSlice";

// router.get("/current", isValidToken, ctrl.getCurrentUser);

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
        } catch (err) {
          //   toast.error(`${err.error.data.message}`);
          console.log(err);
        }
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
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (err) {
          //   toast.error(`${err.error.data.message}`);
          console.log(err);
        }
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
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getUser: builder.query({
      query: () => ({
        url: "/users/current",
        method: "GET",
      }),
      providesTags: ["Books"],
      async onQueryStarted(id, { getState, dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (err) {
          console.log(err);
        }
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
