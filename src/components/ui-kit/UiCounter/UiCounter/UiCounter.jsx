import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {height, width} from '../../../../utils/Responsive';
import UiIcon from '../../UiIcon';
import {styles} from './UiCounterStyle';

const UiCounter = ({value, setCounterValue, isVertical = false}) => {
  const handlerMinus = () => {
    if (value > 1) {
      setCounterValue(value - 1);
    }
  };

  const handlerPlus = () => {
    if (value < 9) {
      setCounterValue(value + 1);
    }
  };

  return (
    <View
      style={
        !isVertical
          ? styles.counter
          : StyleSheet.flatten([styles.counter, verticalStyle.verticalCounter])
      }>
      <TouchableOpacity onPress={handlerMinus} style={styles.minusTouchable}>
        <UiIcon
          iconName={isVertical ? 'plus' : 'minus'}
          iconColor="black"
          iconSize={isVertical ? height(33) : height(3)}
        />
      </TouchableOpacity>
      <View
        style={
          !isVertical
            ? styles.counterValue
            : StyleSheet.flatten([
                styles.counterValue,
                verticalStyle.verticalCounterValue,
              ])
        }>
        <Text style={styles.counterText}>{value}</Text>
      </View>
      <TouchableOpacity onPress={handlerPlus}>
        <UiIcon
          iconName={isVertical ? 'minus' : 'plus'}
          iconColor="black"
          iconSize={isVertical ? height(3) : height(33)}
        />
      </TouchableOpacity>
    </View>
  );
};

const verticalStyle = StyleSheet.create({
  verticalCounter: {flexDirection: 'column', justifyContent: 'center'},
  verticalCounterValue: {
    marginVertical: height(9),
    marginBottom: height(20),
    marginRight: width(9),
  },
});

export default UiCounter;
