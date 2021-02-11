import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import Houses from '../components/Houses';
import { House } from '../consts';
import { AppState } from '../reducers';

const HouseList = () => {
  const houses = useSelector<AppState, House[]>(
    (state) => state.houses.houseList,
  );
  return (
    <View style={styles.container}>
      <Houses data={houses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HouseList;
