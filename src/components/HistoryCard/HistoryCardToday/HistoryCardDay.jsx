import React, {useEffect, useState} from 'react';
import {styles} from './HistoryCardDayStyle';
import {Shadow} from 'react-native-shadow-2';
import {Text, View} from 'react-native';
import {UiButton, UiIcon} from '../../ui-kit';
import {deleteOrder} from '../../../http/orderService';

const HistoryCardDay = props => {
  let isMounted;

  const deleteOrd = () => {
    deleteOrder(props.id);
    props.deleteOrderCallback();
  };
  const [modalVisible, setModalVisible] = useState(false);
  const setModalVisibleCallback = visible => {
    setModalVisible(visible);
  };
  const today = Date.now();
  const date = new Date(today);
  const dayW = date.getDay();
  const [textError, setTextError] = useState();
  return (
    <>
      <Shadow viewStyle={{alignSelf: 'stretch'}} startColor="#00000015">
        <View style={styles.container}>
          {dayW === 5 ? (
            <Text style={styles.order}>Заказ на понедельник</Text>
          ) : (
            <Text style={styles.order}>Заказ на завтра</Text>
          )}
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
