import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import Houses from '../components/Houses';
import { House } from '../consts';
import { AppState } from '../reducers';

const HouseList = () => {
  const houses = useSelector<AppState, House[]>(
    (state) => state.houses.houseList,
  );
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title={'add'}
        onPress={() => {
          navigation.navigate('Add');
        }}
      />
      <Houses data={houses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HouseList;
