import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './UiContainerStyle';

const UiContainer = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default UiContainer;
