import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { House } from '../consts';
import { chooseHouseId } from '../reducers/houseReducer';
import { AppDispatch } from '../store';

interface HousesProps {
  data: House[];
}

const Houses: React.FC<HousesProps> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item._id}
          onPress={() => {
            dispatch(chooseHouseId(item._id));
            navigation.navigate('Details');
          }}>
          <Text>{item.address}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Houses;
