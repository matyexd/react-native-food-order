import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from './UiButtonStyle';

const UiButton = ({text, onPress, style, textStyle, disabled = false}) => {
  return (
    <TouchableOpacity
      style={[styles.mainButton, style]}
      onPress={onPress}
      activeOpacity={0.9}
      disabled={disabled}>
      <Text style={[styles.mainButtonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default UiButton;
