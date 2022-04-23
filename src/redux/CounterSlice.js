import { createSlice } from "@reduxjs/toolkit";

const initialState = {counterValue :0};

const counterSlice = createSlice(
    {
        name: 'counter',
        initialState,
        reducers:{
            // setCounter: (state,action) => {
            //     state.counterValue = action.payload;
            // }

            increaseOne: (state) => {
                state.counterValue ++;
            },
            decreaseOne: (state) => {
                state.counterValue --;
            },
        }
    }
);


export const selectCounter = (state) => state.counter.counterValue;

export const {increaseOne,decreaseOne} = counterSlice.actions;

export default counterSlice.reducer;