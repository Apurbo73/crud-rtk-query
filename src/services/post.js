import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const postApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/"
  }),
  endpoints: builder => ({
    gettAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET"
      })
    }),
    deletePost: builder.mutation({
        query: id => ({
          url: `post/${id}`,
          method:"DELETE"
        })
      })
  })
  //   getPostById:builder.query({
  //     query :(id)=>({
  //      url: `posts/${id}`,
  //      method:'GET'
  //     })
  //  })

});

export const { useGettAllPostQuery, useDeletePostMutation } = postApi;
