import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { House } from '../consts';
import { createHouse } from '../utils/createHouse';
import { getHouse } from '../utils/getHouse';
import { getHouses } from '../utils/getHouses';
import { removeHouse } from '../utils/removeHouse';

export const fetchHousesList = createAsyncThunk(
  'houses/getHouses',
  async () => {
    const response = await getHouses();
    return response;
  },
);

export const fetchHouse = createAsyncThunk(
  'houses/getHouse',
  async (houseId: string) => {
    const response = await getHouse(houseId);
    return response;
  },
);
export const deleteHouse = createAsyncThunk(
  'houses/removeHouse',
  async (houseId: string) => {
    const response = await removeHouse(houseId);
    return response;
  },
);
export const addHouse = createAsyncThunk(
  'houses/createHouse',
  async (house: House[]) => {
    const response = await createHouse(house);
    return response;
  },
);

export interface HouseListState {
  houseList: House[];
  chosenHouseId: string;
}

const initialState: HouseListState = {
  houseList: [],
  chosenHouseId: '',
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
      const id = action.payload;
      state.houseList.slice(id, 1);
    },
    [fetchHousesList.fulfilled.type]: (state, action) => {
      state.houseList.push(action.payload);
    },
    [fetchHouse.fulfilled.type]: (state, action) => {
      state.houseList.push(action.payload);
    },
  },
});
export const { chooseHouseId } = houseListSlice.actions;
export default houseListSlice.reducer;
