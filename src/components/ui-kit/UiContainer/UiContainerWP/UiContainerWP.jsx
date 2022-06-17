import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './UiContainerWPStyle';

const UiContainerWP = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default UiContainerWP;
