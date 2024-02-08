import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counterVal: 0 },
    reducers: {
        increment: (state) => {
            state.counterVal++;
        },
        decrement: (state) => {
            state.counterVal--;
        },
        addition: (state, action) => {
            state.counterVal += Number(action.payload.num);
        },
        subtraction: (state, action) => {
            state.counterVal -= action.payload.num;
        },
    }
});


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

export const counterAction = counterSlice.actions;
export default store;
