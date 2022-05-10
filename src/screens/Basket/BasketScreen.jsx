import React from 'react';
import {View, Text} from 'react-native';
import SBasketCard from '../../components/SBasketCard';
import {
  UiCounter,
  UiDropdown,
  UiContainer,
  UiIcon,
} from '../../components/ui-kit';
import {data} from '../../temp/menu';
import {styles} from './BasketScreenStyle';

const BasketScreen = () => {
  return (
    <UiContainer>
      <View style={styles.header}>
        <Text style={styles.limitLabel}>Корзина</Text>
        <View style={styles.limitPrice}>
          <Text style={styles.limitCount}>230</Text>
          <UiIcon
            iconName="ruble"
            iconColor="#333333"
            style={styles.icon}
            iconSize={24}
          />
        </View>
      </View>
      <View style={styles.card}>
        <SBasketCard
          header={data[0].name}
          image={data[0].image}
          calorie={data[0].calorie}
          gramm={data[0].gramm}
          price={data[0].price}
        />
      </View>
    </UiContainer>
  );
};

export default BasketScreen;
