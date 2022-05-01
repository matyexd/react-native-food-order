import React from 'react';
import {View, Text} from 'react-native';
import {UiCounter, UiDropdown} from '../../components/ui-kit';

const BasketScreen = () => {
  const categories = ['Комплексный обед', 'Салаты', 'Супы', 'Горячее из мяса'];

  return (
    <View>
      <UiCounter value={1} isVertical={true} />
      <UiDropdown titleDropdown={'Категория'} categories={categories} />
    </View>
  );
};

export default BasketScreen;
