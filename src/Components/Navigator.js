import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Details from '../Screens/Details';
import navigationService from './navigationService';
import Product from '../Screens/Product';
import Info from '../Screens/Info';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer
      ref={ref => navigationService.setTopLevelNavigator(ref)}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
