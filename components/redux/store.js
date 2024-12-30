import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import the combined reducers

const store = configureStore( {
    reducer: rootReducer,});

export default store;
