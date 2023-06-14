import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const  productsApiSLice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({})
})
