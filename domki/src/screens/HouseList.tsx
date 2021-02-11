import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Houses from '../components/Houses';
import { House } from '../consts';
import { AppState } from '../reducers';
import { fetchHousesList } from '../reducers/houseReducer';

const HouseList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHousesList());
  }, []);
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
