import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { House } from '../consts';
import { createHouse } from '../utils/createHouse';
import { getHouse } from '../utils/getHouse';
import { getHouses } from '../utils/getHouses';

const fetchHousesList = createAsyncThunk('houses/getHouses', async () => {
  const response = await getHouses();
  return response.data;
});

const fetchHouse = createAsyncThunk(
  'houses/getHouse',
  async (houseId: string) => {
    const response = await getHouse(houseId);
    return response.data;
  },
);
const deleteHouse = createAsyncThunk(
  'houses/removeHouse',
  async (houseId: string) => {
    const response = await removeHouse(houseId);
    return response.data;
  },
);
// const addHouse = createAsyncThunk(
//   'houses/createHouse',
//   async (house: House[]) => {
//     const response = await createHouse(house);
//     return response.data;
//   },
// );

export interface HouseListState {
  houseList: House[];
}

const initialState: HouseListState = {
  houseList: [],
};

const houseListSlice = createSlice({
  name: 'houses',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    // [createHouse.fulfilled]: (state, action) => {},
    [deleteHouse.fulfilled]: (state, action) => {
     state.
    },
    [fetchHousesList.fulfilled]: (state, action) => {
      state.houseList = action.payload;
    },
    [fetchHouse.fulfilled]: (state, action) => {},
  },
});

export const { addHouse, removeHouse } = houseListSlice.actions;
export default houseListSlice.reducer;
