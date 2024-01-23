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


// const counterReducer = (store = INITIAL_VALUE, action) => {
//     if (action.type === 'INCREMENT') {
//         return { counter: store.counter + 1 };
//     } else if (action.type === 'DECREMENT') {
//         return { counter: store.counter - 1 };
//     }
//     return store;
// }