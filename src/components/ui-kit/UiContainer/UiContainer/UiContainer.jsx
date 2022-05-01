import React from 'react';
import {View} from 'react-native';
import {styles} from './UiContainerStyle';

const UiContainer = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default UiContainer;
