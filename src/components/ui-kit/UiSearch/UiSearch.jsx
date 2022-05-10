import React from 'react';
import {View, Text, TextInput} from 'react-native';
import UiIcon from '../UiIcon';
import {styles} from './UiSearchStyle';
import {Shadow} from 'react-native-shadow-2';

const UiSearch = () => {
  return (
    <Shadow
      viewStyle={{alignSelf: 'stretch'}}
      offset={[0, 8]}
      startColor="#00000015">
      <View style={styles.container}>
        <View style={styles.input}>
          <View style={styles.searchIcon}>
            <UiIcon iconName="search" iconColor="#999999" iconSize={18} />
          </View>
          <TextInput
            style={styles.inputText}
            placeholder="Поиск"
            placeholderTextColor="#999999"
          />
          <View style={styles.closeIcon}>
            <UiIcon iconName="close" iconColor="#999999" iconSize={18} />
          </View>
        </View>
      </View>
    </Shadow>
  );
};

export default UiSearch;
