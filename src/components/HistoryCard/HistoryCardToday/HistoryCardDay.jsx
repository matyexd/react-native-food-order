import React, {useEffect, useState} from 'react';
import {styles} from './HistoryCardDayStyle';
import {Shadow} from 'react-native-shadow-2';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {UiButton, UiIcon, UiMainButton} from '../../ui-kit';
import {deleteOrder} from '../../../http/orderService';
import ModalMessageSuccess from '../../ModalMessage/ModalMessageSuccess/ModalMessageSuccess';

const HistoryCardDay = props => {
  let isMounted;

  const deleteOrd = () => {
    if (isMounted) {
      deleteOrder(props.id);
      props.deleteOrderCallback();
      // setModalVisible(true);
      // setTextError('Заказ был удален');
    }
  };
  const [modalVisible, setModalVisible] = useState(false);
  const setModalVisibleCallback = visible => {
    if (isMounted) setModalVisible(visible);
    return () => {};
  };

  useEffect(() => {
    isMounted = true;
    return () => {
      isMounted = false;
    };
  }, []);

  const [textError, setTextError] = useState();
  return (
    <>
      <Shadow viewStyle={{alignSelf: 'stretch'}} startColor="#00000015">
        <View style={styles.container}>
          <Text style={styles.order}>Заказ на завтра</Text>
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
      <ModalMessageSuccess
        modalVisible={modalVisible}
        setModalVisible={setModalVisibleCallback}
        text={textError}
      />
    </>
  );
};

export default HistoryCardDay;
