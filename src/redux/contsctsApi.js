import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authUser.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['contacts'],

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: `/contacts`,
        method: 'GET',
      }),
      providesTags: ['contacts'],
    }),

    createContacts: builder.mutation({
      query: ({ name, number }) => ({
        url: `/contacts`,
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['contacts'],
    }),

    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});
export const {
  useGetContactsQuery,
  useCreateContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;