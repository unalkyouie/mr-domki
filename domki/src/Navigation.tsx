import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HouseList from './screens/HouseList';
import Home from './screens/Home';
import HouseDetails from './screens/HouseDetails';
import AddNewHouse from './screens/AddNewHouse';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={HouseList} />
        <Stack.Screen name="Details" component={HouseDetails} />
        <Stack.Screen name="Add" component={AddNewHouse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
