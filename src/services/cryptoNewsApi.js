import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeader = {
  'X-RapidAPI-Key': 'ecf3ef761fmshbfcffdfd0b0a721p1358fdjsn53435c0103a9',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
};

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeader });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      // Updated query to use the complete base URL
      query: () => createRequest('/v1/theguardian'),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
