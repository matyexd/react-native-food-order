import React from 'react';
import {View, Text, TextInput} from 'react-native';
import SIcon from '../SIcon';
import {styles} from './SearchStyle';

const Search = () => {
  return (
    <View style={styles.input}>
      <View style={styles.searchIcon}>
        <SIcon iconName="search" iconColor="#DDDDDD" />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.inputText}
          placeholder="Поиск"
          placeholderTextColor="#DDDDDD"
        />
      </View>
    </View>
  );
};

export default Search;
