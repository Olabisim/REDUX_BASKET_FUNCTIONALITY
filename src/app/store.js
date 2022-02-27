import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import basketReducer from '../features/basket/basketSlice'


export const store = configureStore({
        reducer: {
                // counter: counterReducer,
                basket: basketReducer
        },
});
