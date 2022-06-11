import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from './UiMainButtonStyle';

const UiMainButton = ({text, onPress, disabled = false}) => {
  return (
    <View>
      {disabled ? (
        <View style={styles.mainButtonDisable}>
          <Text style={styles.mainButtonTextDisable}>В корзине</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.mainButton}
          onPress={onPress}
          disabled={disabled}>
          <Text style={styles.mainButtonText}>{text}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UiMainButton;
