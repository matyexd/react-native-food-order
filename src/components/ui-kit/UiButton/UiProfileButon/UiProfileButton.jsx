import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from './UiProfileButtonStyle';

const UiProfileButton = ({text, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.profileButton} onPress={onPress}>
        <Text style={styles.profileButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UiProfileButton;
