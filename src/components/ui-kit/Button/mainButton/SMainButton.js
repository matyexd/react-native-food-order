import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from './SMainButtonStyle';
import SIcon from './../../SIcon/SIcon';

const SMainButton = ({text, onPress, iconName, iconColor}) => {
  return (
    <View>
      <TouchableOpacity style={styles.mainButton} onPress={onPress}>
        <Text style={styles.mainButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SMainButton;
