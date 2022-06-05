import React from 'react';
import {SafeAreaView, Platform, View} from 'react-native';
import {styles} from './UiContainerStyle';

const UiContainer = ({children}) => {
  return (
    Platform.OS === 'android' ? 
    <SafeAreaView style={styles.container}>{children}</SafeAreaView> 
    : 
    <View style={styles.containerIOS}>{children}</View>
  )
};

export default UiContainer;
