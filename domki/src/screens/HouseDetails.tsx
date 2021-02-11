import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import Details from '../components/Details';
import { AppState } from '../reducers';

const HouseDetails = () => {
  const houseId = useSelector<AppState>((state) => state.houses.chosenHouseId);
  return (
    <View>
      <Details house={houseId} />
    </View>
  );
};

export default HouseDetails;
