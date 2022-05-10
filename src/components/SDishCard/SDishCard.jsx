import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {UiIcon, UiMainButton} from '../ui-kit';
import {styles} from './SDishCardStyle';
import {Shadow} from 'react-native-shadow-2';

const SDishCard = props => {
  const {header, calorie, gramm, price, image} = props;
  const onPressHandler = () => {
    console.log('Нажата кнопка');
  };

  return (
    <Shadow viewStyle={{alignSelf: 'stretch'}} startColor="#00000015">
      <View style={styles.container}>
        <Image style={styles.img} source={image} />
        <View style={styles.info}>
          <Text style={styles.header}>{header}</Text>
          <Text style={styles.calorie}>
            {gramm}гр {calorie}Ккал
          </Text>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={styles.about}>
              <View style={styles.price}>
                <Text style={styles.count}>{price}</Text>
                <UiIcon
                  iconName="ruble"
                  iconColor="black"
                  iconSize={24}
                  style={styles.icon}
                />
              </View>
              <UiMainButton text="Добавить" onPress={onPressHandler} />
            </View>
          </View>
        </View>
      </View>
    </Shadow>
  );
};

export default SDishCard;
