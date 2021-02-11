import React, { useEffect, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../store';

const Form = () => {
  const [address, setAddress] = useState<string>();
  const [owner, setOwner] = useState<string>();
  const [area, setArea] = useState<string>();
  const [price, setPrice] = useState<string>();
  const [isReadyToAdd, setIsReadyToAdd] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const addHouse = async () => {
    const house = {
      address,
      owner,
      area,
      price,
    };
    await dispatch(addHouse(house));
  };
  useEffect(() => {
    address && owner && area && price && setIsReadyToAdd(true);
  }, [address, area, owner, price]);
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
      <Button title={'Add'} onPress={addHouse} disabled={!isReadyToAdd} />
    </View>
  );
};

export default Form;
