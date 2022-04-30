import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {View, Text} from 'react-native';
import {fonts} from './theme/Fonts';
<<<<<<< HEAD
import SMainButton from './components/ui-kit/Button/mainButton';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ProfileScreen,
  FavouritesScreen,
  BasketScreen,
  CustomTabs,
} from './screens';

const Tab = createBottomTabNavigator();
=======
>>>>>>> feature/DishCard

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={props => CustomTabs(props)}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Basket"
          component={BasketScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
