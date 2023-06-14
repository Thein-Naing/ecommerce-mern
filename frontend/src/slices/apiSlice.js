import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL} from '../constants';

const baseQuery = fetchBaseQuery({baseURL: BASE_URL});

// parent of all apiSLices.
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Products', 'Order', 'User'],
  endpoints: (builder) => ({}),
});
