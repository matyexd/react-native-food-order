import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {UiIcon, UiMainButton} from '../ui-kit';
import {styles} from './SDishCardStyle';

const SDishCard = props => {
  const {header, calorie, gramm, price, image} = props;
  const onPressHandler = () => {
    console.log('Нажата кнопка');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
      <Text style={styles.header}>{header}</Text>
      <View style={styles.about}>
        <Text style={styles.calorie}>{gramm} гр</Text>
        <View style={styles.price}>
          <Text style={styles.count}>{price}</Text>
          <UiIcon
            iconName="ruble"
            iconColor="black"
            iconSize={18}
            style={styles.icon}
          />
        </View>
      </View>
      <UiMainButton text="Добавить" onPress={onPressHandler} />
    </View>
  );
};

export default SDishCard;
