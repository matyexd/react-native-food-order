import React from 'react';
import {View} from 'react-native';
import {styles} from './UiContainerWPStyle';

const UiContainerWP = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default UiContainerWP;
