import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Details from '../components/Details';
import { House } from '../consts';
import { AppState } from '../reducers';
import { fetchHouse } from '../reducers/houseReducer';

const HouseDetails = () => {
  const houseId = useSelector<AppState>((state) => state.houses.chosenHouseId);
  const dispatch = useDispatch();
  const [house, setHouse] = useState<House>();
  useEffect(() => {
    if (houseId) {
      const promise = dispatch(fetchHouse(houseId));
      setHouse(promise);
    }
  }, []);
  return (
    <View>
      <Details house={house} />
    </View>
  );
};

export default HouseDetails;
