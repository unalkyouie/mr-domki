import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import Form from '../components/Form';
import { AppDispatch } from '../store';

const AddNewHouse = () => {
  const dispatch = useDispatch<AppDispatch>();

  const addHouse = () => {
    dispatch(addHouse(house));
  };

  return (
    <View>
      <Form onPress={addHouse} />
    </View>
  );
};

export default AddNewHouse;
