import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { House } from '../consts';
import { deleteHouse } from '../reducers/houseReducer';

interface HouseDetailsProps {
  house: House;
}

const Details: React.FC<HouseDetailsProps> = ({ house }) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{house.address}</Text>
      <Text>{house.owner}</Text>
      <Text>{house.area}</Text>
      <Text>{house.price}</Text>
      <Button
        title={'removeHouse'}
        onPress={() => {
          house._id && dispatch(deleteHouse(house._id));
        }}
      />
    </View>
  );
};

export default Details;
