import React from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { House } from '../consts';
import { deleteHouse } from '../reducers/houseReducer';
import { AppDispatch } from '../store';

interface HousesProps {
  data: House[];
}

const Houses: React.FC<HousesProps> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            dispatch(deleteHouse(item._id));
          }}>
          <Text>{item.address}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Houses;
