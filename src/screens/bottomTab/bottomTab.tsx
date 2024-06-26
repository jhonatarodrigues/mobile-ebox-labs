import React from 'react';
import { BottomTabBarProps, BottomTabHeaderProps, BottomTabNavigationEventMap, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/home';
import ProductsScreen from '@/screens/products';
import QrCodeScanner from '@/screens/qrCodeScanner';
import { TouchableOpacity } from 'react-native';
import { BaseGradient } from '@/components/BaseGradient';

import HomeIcon from '@/assets/svg/home.svg';
import ProductsIcon from '@/assets/svg/products.svg';
import QrCodeScannerIcon from '@/assets/svg/qrcode.svg';
import SiteIcon from '@/assets/svg/site.svg';
import WhatsIcon from '@/assets/svg/whats.svg';

import { BaseIcon, ContentTabBar, TabBarItem } from './styles';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import HeaderComponent from '@/components/header';

type Route = {
  key: string;
  name: string;
  params?: object;
};


const Tab = createBottomTabNavigator();
const icons = {
  Home: <HomeIcon/>,
  Products: <ProductsIcon/>,
  QrCodeScanner: <QrCodeScannerIcon />,
  Site: <SiteIcon />,
  Whats: <WhatsIcon />
}


const onHandleTabBarItemPress = (
  route: Route, 
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
) => {
  const event = navigation.emit({
    type: 'tabPress',
    target: route.key,
    canPreventDefault: true,
  });

  if ( !event.defaultPrevented) {
    navigation.navigate(route.name, route.params);
  }
}

const renderItem = (icon: JSX.Element, onPress: () => void) => (
  <TouchableOpacity onPress={onPress}>
    <TabBarItem>
      <BaseIcon>
        {icon}
      </BaseIcon>
    </TabBarItem>
  </TouchableOpacity>
)

const tabBarItem = (route: Route, navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>) => 
  renderItem(icons[route.name as keyof typeof icons], () => onHandleTabBarItemPress(route, navigation));

const tabBar = ({state, navigation}: BottomTabBarProps) => (
  <ContentTabBar>
    {state.routes.map((route) => tabBarItem(route, navigation))}
    {renderItem(icons.Site, () => console.log('Site'))}
    {renderItem(icons.Whats, () => console.log('Whats'))}
  </ContentTabBar>
);


function BottomTabHome() {
  const header = ({options}: BottomTabHeaderProps) => 
    <HeaderComponent title={options.headerTitle as string ?? ''} />
  
  return (
    <BaseGradient>
      <Tab.Navigator screenOptions={{
        header: header,
      }}
      sceneContainerStyle={{
        backgroundColor: 'transparent',
      }}
      tabBar={tabBar}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          headerShown: false,
        }} />
        <Tab.Screen name="Products" component={ProductsScreen} options={{
          headerTitle: 'Catalog',
        }} />
        <Tab.Screen name="QrCodeScanner" component={QrCodeScanner} options={{
          headerTitle: 'Scanner',
        }} />
      </Tab.Navigator>
    </BaseGradient>
  );
}

export default BottomTabHome;