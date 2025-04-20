import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import filingReducer from './filingReducer';
import paperReducer from './paperReducer';
import electeonicReducer from './electeonicReducer';
import stationeryReducer from './stationeryReducer';
import authReducer from './authReducer'; // Import your authReducer

// Combine all the reducers into one root reducer
export const allReducers = combineReducers({
  electeonic: electeonicReducer,
  paper: paperReducer,
  filing: filingReducer,
  stationery: stationeryReducer,
  cart: cartReducer,
  auth: authReducer, // Add authReducer here
});
