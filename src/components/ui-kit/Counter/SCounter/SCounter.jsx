import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {height, sp} from '../../../../utils/Responsive';
import SIcon from '../../SIcon';
import {styles} from './SCounterStyle';

const SCounter = ({handlerMinus, handlerPlus, value}) => {
  return (
    <View style={styles.counter}>
      <TouchableOpacity onPress={() => handlerMinus()}>
        <SIcon iconName={'minus'} iconColor="black" iconSize={height(2)} />
      </TouchableOpacity>
      <View style={styles.counterValue}>
        <Text style={styles.counterText}>{value}</Text>
      </View>
      <TouchableOpacity onPress={() => handlerPlus()}>
        <SIcon iconName={'plus'} iconColor="black" iconSize={height(29)} />
      </TouchableOpacity>
    </View>
  );
};

export default SCounter;
