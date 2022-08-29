import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath:'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://127.0.0.1:8000/api/',
    }),

    endpoints: (builder) =>({
        getAllPost: builder.query({
          query: () => ({
            url: 'data',
            method: 'GET'  
          })  
        }),
      
        getPostByLimit: builder.query({
          query: (num) =>{
            console.log("Limit Num",num)
            return{
            // url:`posts?_limit=${num}`,
              url:`data?page=${num}`,
              method: 'GET'
            }
          }
        }),
    }),
})

export const {useGetAllPostQuery,useGetPostByLimitQuery} = postApi