import React from 'react';
import {View, Text, TextInput} from 'react-native';
import UiIcon from '../UiIcon';
import {styles} from './UiSearchStyle';
import {Shadow} from 'react-native-shadow-2';

const UiSearch = props => {
  return (
    <Shadow
      viewStyle={{alignSelf: 'stretch'}}
      offset={[0, 8]}
      startColor="rgba(51, 51, 51, 0.06)">
      <View style={styles.searchSection}>
        <UiIcon
          iconName={'search'}
          iconSize={18}
          iconColor="rgba(170, 170, 170, 1)"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Поиск"
          underlineColorAndroid="transparent"
          value={props.value}
          onChangeText={props.onInputChangeHandler}
        />
        <UiIcon
          iconName={'close'}
          iconSize={18}
          iconColor="rgba(170, 170, 170, 1)"
          style={styles.iconClose}
        />
      </View>
    </Shadow>
  );
};

export default UiSearch;
