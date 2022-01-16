import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const applicantApi = createApi({
    reducerPath: 'applicantApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-sandbox.coterieinsurance.com/v1/',
    }),

    endpoints: (builder) => ({
        createCommercialApplicant: builder.mutation({
            query: (newApplicant) => {
                return {
                    url: 'commercial/applications',
                    method: 'POST',
                    body: newApplicant,
                    headers: {
                        "Content-type": "application/json",
                        "authorization": "token 73920c6f-d530-419c-87b3-4f4762e05e9d",
                    }
                }
            }
        })
    })
})

export const { useCreateCommercialApplicantMutation } = applicantApi




// Define a service using a base URL and expected endpoints
// export const applicantApi = createApi({
//   reducerPath: 'applicantApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://api-sandbox.coterieinsurance.com/v1/' }),
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = applicantApi