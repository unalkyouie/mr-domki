import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../store';

const Form = () => {
  const [address, setAddress] = useState('');
  const [owner, setOwner] = useState('');
  const [area, setArea] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const addHouse = () => {
    const house = {
      address,
      owner,
      area,
      price,
    };
    dispatch(addHouse(house));
  };

  return (
    <View>
      <TextInput
        placeholder={'address'}
        onChangeText={(value) => {
          setAddress(value);
        }}
      />
      <TextInput
        placeholder={'owner'}
        onChangeText={(value) => {
          setOwner(value);
        }}
      />
      <TextInput
        placeholder={'area'}
        onChangeText={(value) => {
          setArea(value);
        }}
      />
      <TextInput
        placeholder={'price'}
        onChangeText={(value) => {
          setPrice(value);
        }}
      />
      <Button title={'Add'} onPress={addHouse} />
    </View>
  );
};

export default Form;
