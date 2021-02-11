import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

import { Tile } from '../consts';

const { width } = Dimensions.get('window');

const HomeTile: React.FC<Tile> = ({
  title,
  subTitle,
  text,
  button,
  backgroundImage,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        backgroundImage && { backgroundColor: '#0099ff' },
      ]}>
      <Text style={styles.title}>{title?.toUpperCase()}</Text>
      <Text style={styles.subtitle}>{subTitle?.toUpperCase()}</Text>
      <Text style={styles.text}>{text}</Text>
      {button && (
        <Button
          title={'ZOBACZ WIĘCEJ'}
          onPress={() => {
            navigation.navigate('List');
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: width,
    width,
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: '#0099ff',
    textAlign: 'center',
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    paddingBottom: 20,
  },
  image: {
    height: width,
    width,
  },
});

export default HomeTile;
