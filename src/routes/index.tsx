// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackHeaderProps, createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductsDetailScreen from '@/screens/productsDetail';
import BottomTabHome from '@/screens/bottomTab/bottomTab';
import HeaderComponent from '@/components/header';

const Stack = createNativeStackNavigator();

function Routes() {
  const header = ({options}: NativeStackHeaderProps) => 
    <HeaderComponent title={options.title ?? ''} />

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="/" screenOptions={{
        header: header,
      }}>
        <Stack.Screen name="/" component={BottomTabHome} options={{
          headerShown: false,
        }} />
        
        <Stack.Screen name="ProductsDetail" options={{
          title: 'Product',
        }} component={ProductsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
