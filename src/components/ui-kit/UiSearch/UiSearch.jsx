import React from 'react';
import {View, Text, TextInput} from 'react-native';
import UiIcon from '../UiIcon';
import {styles} from './UiSearchStyle';

const UiSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <View style={styles.searchIcon}>
          <UiIcon iconName="search" iconColor="#DDDDDD" iconSize={18} />
        </View>
        <TextInput
          style={styles.inputText}
          placeholder="Поиск"
          placeholderTextColor="#DDDDDD"
        />
        <View style={styles.closeIcon}>
          <UiIcon iconName="close" iconColor="#DDDDDD" iconSize={18} />
        </View>
      </View>
    </View>
  );
};

export default UiSearch;
