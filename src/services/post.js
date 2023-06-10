import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const post = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl:
    })
})