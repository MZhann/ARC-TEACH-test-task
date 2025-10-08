import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "@/types/product";

//Связка с мок апишкой для кофе: https://api.sampleapis.com/coffee/


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.sampleapis.com/coffee/",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "hot",
      providesTags: ["Products"],
      transformResponse: (response: any[]): Product[] => {
        return response.map((item) => ({
          id: String(item.id),
          articul: `ART-${item.id}`,
          name: item.title,
          description: item.description,
          weight: "500g",
          price: Math.floor(Math.random() * 10000) + 1000,
          image_url: item.image,
          available: true,
          amountInStore: Math.floor(Math.random() * 10) + 1,
          details: {
            type: "coffee",
            roastLevel: 3,
            form: "beans",
            volume: "500g",
            originCountry: "Unknown",
            madeIn: "Unknown",
            contains: "100% arabica",
            ingredients: ["water", "coffee beans"]
          },
        }));
      },
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `hot/${id}`,
      transformResponse: (item: any): Product => ({
        id: String(item.id),
        articul: `ART-${item.id}`,
        name: item.title,
        description: item.description,
        weight: "500g",
        price: Math.floor(Math.random() * 10000) + 1000,
        image_url: item.image,
        available: true,
        amountInStore: Math.floor(Math.random() * 10) + 1,
        details: {
          type: "coffee",
          roastLevel: 3,
          form: "beans",
          volume: "500g",
          originCountry: "Unknown",
          madeIn: "Unknown",
          contains: "100% arabica",
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
