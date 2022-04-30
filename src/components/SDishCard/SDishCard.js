import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import SMainButton from '../ui-kit/Button/mainButton';
import SIcon from '../ui-kit/SIcon';
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
        <View style={styles.price}>
          <Text style={styles.calorie}>40</Text>
          <SIcon iconName="ruble" iconColor="black" />
        </View>
      </View>
      <SMainButton text="Добавить" onPress={onPressHandler} />
    </View>
  );
};

export default SDishCard;
