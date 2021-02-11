import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

import { House } from '../consts';

interface FormProps {
  onPress: (house: House) => void;
}

const Form: React.FC<FormProps> = ({ onPress }) => {
  const [address, setAddress] = useState('');
  const [owner, setOwner] = useState('');
  const [area, setArea] = useState('');
  const [price, setPrice] = useState('');

  const addHouse = () => {
    const house = {
      address,
      owner,
      area,
      price,
    };
    onPress(house);
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
