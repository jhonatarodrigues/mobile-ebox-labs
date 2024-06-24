import { BottomTabBarProps, BottomTabNavigationEventMap, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/home';
import ProductsScreen from '@/screens/products';
import QrCodeScanner from '@/screens/qrCodeScanner';
import { Text, TouchableOpacity, View } from 'react-native';
import { BaseGradient } from '@/components/BaseGradient';

import HomeIcon from '@/assets/svg/home.svg';
import ProductsIcon from '@/assets/svg/products.svg';
import QrCodeScannerIcon from '@/assets/svg/qrcode.svg';

import { BaseIcon, ContentTabBar, TabBarItem } from './styles';

const Tab = createBottomTabNavigator();

const icons = {
  Home: <HomeIcon/>,
  Products: <ProductsIcon/>,
  QrCodeScanner: <QrCodeScannerIcon />
}



const onHandleTabBarItemPress = (route, navigation) => {
  console.log('onHandleTabBarItemPress', route.key);

  const event = navigation.emit({
    type: 'tabPress',
    target: route.key,
    canPreventDefault: true,
  });

  // if (!isFocused && !event.defaultPrevented) {
    navigation.navigate(route.name, route.params);
  // }
}

const tabBarItem = (route, navigation) => {

  console.log('tabBarItem', route.name)


  return (
    <TouchableOpacity onPress={() => onHandleTabBarItemPress(route, navigation)}>
      <TabBarItem>
        <BaseIcon>
          {icons[route.name as keyof typeof icons]}
        </BaseIcon>
      </TabBarItem>
    </TouchableOpacity>
  );

}


const tabBar = ({state, navigation}: BottomTabBarProps) => {
  console.log('tabBar', state);
  return (
    <ContentTabBar>
      {state.routes.map((route) => tabBarItem(route, navigation))}
    </ContentTabBar>
  );
}


function BottomTabHome() {
  return (
    <BaseGradient>
      <Tab.Navigator screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: 'transparent',
      }}
      tabBar={tabBar}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Products" component={ProductsScreen} />
        <Tab.Screen name="QrCodeScanner" component={QrCodeScanner} />
      </Tab.Navigator>
    </BaseGradient>
  );
}

export default BottomTabHome;