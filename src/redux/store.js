import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    devTools: process.env.NODE_ENV !== 'PRODUCTION'
}
    
    
);

export default store;