import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { House } from '../consts';
import { createHouse } from '../utils/createHouse';
import { getHouse } from '../utils/getHouse';
import { getHouses } from '../utils/getHouses';
import { removeHouse } from '../utils/removeHouse';

export const fetchHousesList = createAsyncThunk(
  'houses/getHouses',
  async (thunkAPI) => {
    const response = await getHouses();
    return response;
  },
);

export const fetchHouse = createAsyncThunk(
  'houses/getHouse',
  async (houseId: string, thunkAPI) => {
    const response = await getHouse(houseId);
    return response;
  },
);
export const deleteHouse = createAsyncThunk(
  'houses/removeHouse',
  async (houseId: string, thunkAPI) => {
    const response = await removeHouse(houseId);
    return response;
  },
);
export const addHouse = createAsyncThunk(
  'houses/createHouse',
  async (house: House, thunkAPI) => {
    const response = await createHouse(house);
    return response;
  },
);

export interface HouseListState {
  houseList: House[];
  chosenHouseId: string;
  error: boolean;
}

const initialState: HouseListState = {
  houseList: [],
  chosenHouseId: '',
  error: true,
};

const houseListSlice = createSlice({
  name: 'houses',
  initialState: initialState,
  reducers: {
    chooseHouseId: (state, action) => {
      state.chosenHouseId = action.payload;
    },
  },
  extraReducers: {
    [addHouse.fulfilled.type]: (state, action) => {},
    [deleteHouse.fulfilled.type]: (state, action) => {
      const id = state.houseList.indexOf(action.payload);
      state.houseList.slice(id, 1);
    },
    [fetchHousesList.fulfilled.type]: (state, action) => {
      state.houseList = action.payload;
    },
    [fetchHouse.fulfilled.type]: (state, action) => {
      state.houseList.push(action.payload);
    },
  },
});
export const { chooseHouseId } = houseListSlice.actions;
export default houseListSlice.reducer;
