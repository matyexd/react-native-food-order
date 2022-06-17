import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';
import {styles} from './UiButtonStyle';

const UiButton = ({
  text,
  onPress,
  style,
  textStyle,
  disabled = false,
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.mainButton, style]}
      onPress={onPress}
      activeOpacity={0.9}
      disabled={disabled}>
      {isLoading ? (
        <UIActivityIndicator color={'#AAAAAA'} size={20} />
      ) : (
        <Text style={[styles.mainButtonText, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default UiButton;
