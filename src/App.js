/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {fonts} from './theme/Fonts';

const App = () => {
  return (
    <View>
      <Text style={fonts.PrimaryText}>Привет</Text>
    </View>
  );
};

export default App;
