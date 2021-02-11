import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { Tile } from '../consts';

const { width } = Dimensions.get('window');

const HomeTile: React.FC<Tile> = ({
  title,
  subTitle,
  backgroundImage,
  text,
  button,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* {!backgroundImage && (
        <ImageBackground
          style={styles.image}
          source={{ uri: { backgroundImage } }}
        />
      )} */}
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      <Text style={styles.subtitle}>{subTitle?.toLowerCase()}</Text>
      <Text style={styles.text}>{text}</Text>
      {button && (
        <Button
          title={'ZOBACZ WIĘCEJ'}
          onPress={() => {
            navigation.navigate('HouseList');
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
    width,
  },
  title: {
    fontSize: 42,
    color: 'black',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 32,
    color: 'cyan',
    textAlign: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
  image: {
    height: width,
    width,
  },
});

export default HomeTile;
