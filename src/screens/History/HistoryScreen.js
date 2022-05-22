import React from 'react';
import {UiContainer} from '../../components/ui-kit';
import {styles} from './HistoryScreenStyle';

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
