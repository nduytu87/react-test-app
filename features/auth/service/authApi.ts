import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { AuthResponse, LoginRequest } from '@/features/auth/types';
import { BASE_URL } from '@/common/constants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (data) => ({
        url: `/login`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
