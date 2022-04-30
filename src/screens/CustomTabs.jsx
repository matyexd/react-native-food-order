import React from 'react';
import {View, Text} from 'react-native';
import SIcon from '../components/ui-kit/SIcon';
import {fonts} from '../theme/Fonts';

const CustomTabs = ({route}) => ({
  tabBarIcon: ({focused}) => {
    let iconName;
    let iconColor;

    iconColor = focused ? 'black' : 'gray';

    if (route.name === 'Home') {
      iconName = focused ? 'main' : 'main';
    } else if (route.name === 'Basket') {
      iconName = focused ? 'shopCart' : 'shopCart';
    } else if (route.name === 'Favourites') {
      iconName = focused ? 'favorites' : 'favorites';
    } else if (route.name === 'Profile') {
      iconName = focused ? 'profile' : 'profile';
    }

    // You can return any component that you like here!
    return <SIcon iconName={iconName} iconColor={iconColor} />;
  },
  tabBarLabel: ({focused, color}) => {
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
      <Text style={[{color: textColor}, fonts.SecondaryTextSmall]}>
        {textContent}
      </Text>
    );
  },
});

export default CustomTabs;
