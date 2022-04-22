import { createSlice } from "@reduxjs/toolkit";

const initialState = {counterValue :0};

const counterSlice = createSlice(
    {
        name: 'counter',
        initialState,
        reducers:{
            setCounter: (state,action) => {
                state.counterValue = action.payload;
            }
        }
    }
);


export const selectCounter = (state) => state.counter.counterValue;

export const {setCounter} = counterSlice.actions;

export default counterSlice.reducer;