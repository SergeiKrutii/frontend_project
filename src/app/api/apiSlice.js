import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";
import { setToken } from "redux/auth/authSlice";

const BASE_URL = "https://backendproject-production-a16c.up.railway.app/api";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status !== 401)
    toast.warning(`${result?.error?.data?.message}`, {
      theme: "colored",
      containerId: "mainContainer",
    });

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery("/users/refresh", api, extraOptions);

    if (refreshResult?.data) {
      api.dispatch(setToken({ ...refreshResult.data }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      if (refreshResult?.error?.status === 403) {
        refreshResult.error.data.message = "Your login has expired. ";
      }
      return refreshResult;
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Books", "User", "Goal", "Results"],
  endpoints: (builder) => ({}),
});
