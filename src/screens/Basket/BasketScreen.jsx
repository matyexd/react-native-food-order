import React from 'react';
import {View, Text} from 'react-native';
import {UiCounter, UiDropdown} from '../../components/ui-kit';

const BasketScreen = () => {
  return (
    <View>
      <UiCounter value={1} isVertical={true} />
    </View>
  );
};

export default BasketScreen;
