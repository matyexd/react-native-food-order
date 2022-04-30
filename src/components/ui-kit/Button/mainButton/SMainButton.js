import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './SMainButtonStyle';

const SMainButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainButton} onPress={onPress}>
      <Text style={styles.mainButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SMainButton;
