import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { House } from '../consts';
import { deleteHouse, fetchHouse } from '../reducers/houseReducer';

interface HouseDetailsProps {
  houseId: string;
}

const Details: React.FC<HouseDetailsProps> = ({ houseId }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [house, setHouse] = useState<House>();
  useEffect(() => {
    async () => {
      const details = await dispatch(fetchHouse(houseId));
      setHouse(details);
    };
  }, [dispatch, houseId]);
  return (
    <View>
      <Text style={styles.text}>{house?.address}</Text>
      <Text style={styles.text}>{house?.owner}</Text>
      <Text style={styles.text}>{house?.area}</Text>
      <Text style={styles.text}>{house?.price}</Text>
      <Button
        title={'removeHouse'}
        onPress={async () => {
          house?._id && (await dispatch(deleteHouse(house._id)));
          navigation.navigate('List');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default Details;
