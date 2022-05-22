import React from 'react';
import {UiContainer} from '../../components/ui-kit';
import {styles} from './HistoryScreenStyle';
import {View, Text, Image} from 'react-native';

const HistoryScreen = () => {
  return (
    <>
      <UiContainer>
        <View>
          <Text style={styles.title}>История заказов</Text>
        </View>
      </UiContainer>
    </>
  );
};

export default HistoryScreen;
