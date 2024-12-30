import { combineReducers } from 'redux';
import { reducer } from './reducer'; // Ensure the path is correct

// Assign a meaningful key to the reducer
const rootReducer = combineReducers({
  cart: reducer, // Use "cart" as the key to represent this slice of state
});

export default rootReducer;
