import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://kapusta-backend.goit.global/";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    const refreshToken = getState().auth.refreshToken;
    const isRefreshed = getState().auth.isTokenRefreshed;

    // if (token) {
    //   headers.set("Authorization", `Bearer ${token}`);
    // }

    if (isRefreshed) {
      if (refreshToken) {
        headers.set("Authorization", `Bearer ${refreshToken}`);
      }
    } else {
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    }

    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Transactions", "User"],
  endpoints: (builder) => ({}),
});
