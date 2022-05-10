import React from 'react';
import {Text, StyleSheet} from 'react-native';
import SIcon from '../components/ui-kit/UiIcon';
import {styles} from './ CustomTabsStyle';

const CustomTabs = ({route}) => ({
  tabBarIcon: ({focused}) => {
    let iconName;
    let iconColor;

    iconColor = focused ? 'black' : 'gray';

    if (route.name === 'Home') {
      iconName = focused ? 'main' : 'main';
    } else if (route.name === 'Basket') {
      iconName = focused ? 'basket' : 'basket';
    } else if (route.name === 'Favourites') {
      iconName = focused ? 'favorites' : 'favorites';
    } else if (route.name === 'Profile') {
      iconName = focused ? 'profile' : 'profile';
    }

    // You can return any component that you like here!
    return <SIcon iconName={iconName} iconColor={iconColor} />;
  },
  tabBarLabel: ({focused}) => {
    let textColor;
    textColor = focused ? 'black' : 'gray';
    let textContent;

    if (route.name === 'Home') {
      textContent = 'Главная';
    } else if (route.name === 'Basket') {
      textContent = 'Корзина';
    } else if (route.name === 'Favourites') {
      textContent = 'Избранное';
    } else if (route.name === 'Profile') {
      textContent = 'Профиль';
    }

    return (
      <Text style={StyleSheet.flatten([styles.textLabel, {color: textColor}])}>
        {textContent}
      </Text>
    );
  },

  tabBarHideOnKeyboard: true,
});

export default CustomTabs;
