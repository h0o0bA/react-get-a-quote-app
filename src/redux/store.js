import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { applicantApi } from '../services/commercialApplicant'
import userBuisnessReducer from './userBuismess';

const store = configureStore({
    reducer: {
        [applicantApi.reducerPath]: applicantApi.reducer,
        buisnessUser: userBuisnessReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(applicantApi.middleware),
})

export default store

setupListeners(store.dispatch)