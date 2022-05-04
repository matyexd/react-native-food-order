import React from 'react';
import {View} from 'react-native';
import {styles} from './UiContainerHomeStyle';

const UiContainerHome = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default UiContainerHome;
