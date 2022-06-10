import React from 'react';
import {View, TextInput} from 'react-native';
import UiIcon from '../UiIcon';
import {styles} from './UiSearchStyle';
import {Shadow} from 'react-native-shadow-2';
import {TouchableOpacity} from 'react-native-gesture-handler';

const UiSearch = props => {
  const onInputChange = () => {
    props.onInputChangeHandler('');
  };
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
        <TouchableOpacity
          disabled={props.value?.length === 0}
          onPress={onInputChange}>
          <UiIcon
            iconName={'close'}
            iconSize={18}
            iconColor="rgba(170, 170, 170, 1)"
            style={styles.iconClose}
          />
        </TouchableOpacity>
      </View>
    </Shadow>
  );
};

export default UiSearch;
