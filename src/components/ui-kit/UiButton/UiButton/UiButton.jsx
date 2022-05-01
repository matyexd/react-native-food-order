import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from './UiButtonStyle';

const UiButton = ({text, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.mainButton} onPress={onPress}>
        <Text style={styles.mainButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UiButton;
