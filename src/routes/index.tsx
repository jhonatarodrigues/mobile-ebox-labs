// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '@/screens/home';
import ProductsScreen from '@/screens/products';
import ProductsDetailScreen from '@/screens/productsDetail';
import BottomTabHome from '@/screens/bottomTab/bottomTab';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="/" >
        <Stack.Screen name="/" component={BottomTabHome} options={{
          headerShown: false,
        }}/>
        
        <Stack.Screen name="ProductsDetail" component={ProductsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
