import React from 'react';
import {styles} from './HistoryCardDayStyle';
import {Shadow} from 'react-native-shadow-2';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {UiButton, UiIcon, UiMainButton} from '../../ui-kit';
import {deleteOrder} from '../../../http/orderService';

const HistoryCardDay = props => {
  const deleteOrd = () => {
    deleteOrder(props.id);
    props.deleteOrderCallback();
  };

  return (
    <>
      <Shadow viewStyle={{alignSelf: 'stretch'}} startColor="#00000015">
        <View style={styles.container}>
          <Text style={styles.order}>Заказ на сегодня</Text>
          <Text style={styles.dateText}>{props.date}</Text>
          <View style={styles.footer}>
            <View style={styles.price}>
              <Text style={styles.priceText}>{props.price}</Text>
              <UiIcon
                iconName="ruble"
                iconColor="#333333"
                iconSize={25}
                style={styles.priceIcon}
              />
            </View>
            <UiButton text="Отменить" onPress={deleteOrd} />
          </View>
        </View>
      </Shadow>
    </>
  );
};

export default HistoryCardDay;
