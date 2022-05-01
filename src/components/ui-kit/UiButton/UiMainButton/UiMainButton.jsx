import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from './UiMainButtonStyle';

const UiMainButton = ({text, onPress, iconName, iconColor}) => {
  return (
    <View>
      <TouchableOpacity style={styles.mainButton} onPress={onPress}>
        <Text style={styles.mainButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UiMainButton;
