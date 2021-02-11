import { combineReducers } from '@reduxjs/toolkit';

import houseReducer from './houseReducer';

const reducers = combineReducers({
  houses: houseReducer,
});

export type AppState = ReturnType<typeof reducers>;

export default reducers;
