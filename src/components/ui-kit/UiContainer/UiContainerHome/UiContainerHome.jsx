import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './UiContainerHomeStyle';

const UiContainerHome = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default UiContainerHome;
