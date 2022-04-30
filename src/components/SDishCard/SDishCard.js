import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import SMainButton from '../ui-kit/Button/mainButton';
import {styles} from './SDishCardStyle';

const SDishCard = props => {
  const {header, calorie, gramm, price} = props;
  const onPressHandler = () => {
    console.log('Нажата кнопка');
  };
  console.log(props);
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('./../../assets/img/salat.png')}
      />
      <Text style={styles.header}>{header}</Text>
      <View style={styles.about}>
        <Text style={styles.calorie}>100гр.</Text>
        <Text style={styles.calorie}>550 ккал</Text>
      </View>
      <SMainButton
        text="40"
        iconName="ruble"
        iconColor="white"
        onPress={onPressHandler}
      />
    </View>
  );
};

export default SDishCard;
