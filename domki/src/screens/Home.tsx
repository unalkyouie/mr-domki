import React from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';

import HomeTile from '../components/HomeTIle';
import { tiles } from '../consts';

const { width } = Dimensions.get('window');

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {tiles.map((el) => (
        <HomeTile key={el.id} {...el} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
});

export default Home;
