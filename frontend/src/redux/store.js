import { createStore } from 'redux';
import { allReducers } from './reducer';  // Import the combined reducers

// Create the store using the combined reducers
const store = createStore(allReducers);

// Log the initial state (optional, but useful for debugging)
console.log(store.getState());

export default store;
