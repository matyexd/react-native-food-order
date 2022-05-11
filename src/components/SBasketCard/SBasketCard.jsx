import React, {useState} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {UiButton, UiCounter, UiIcon, UiMainButton, UiSearch} from '../ui-kit';
import {Shadow} from 'react-native-shadow-2';
import {styles} from './SBasketCardStyle';
import {Button} from 'react-native-paper';

const SBasketCard = props => {
  const {header, calorie, gramm, price, image} = props;
  const onPressHandler = () => {
    console.log('Нажата кнопка');
  };
  const [counterValue, setCounterValue] = useState(1);
  return (
    <>
      <Shadow viewStyle={{alignSelf: 'stretch'}} startColor="#00000015">
        <View style={styles.container}>
          <Image style={styles.img} source={image} />
          <View style={styles.info}>
            <View style={styles.gramm}>
              <View>
                <Text style={styles.header}>{header}</Text>
                <Text style={styles.calorie}>
                  {gramm}гр {calorie}Ккал
                </Text>
              </View>
              <TouchableOpacity style={styles.trash}>
                <UiIcon
                  iconName="trash"
                  iconColor="#000"
                  iconSize={24}
                  style={styles.trashIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.infoPrice}>
              <View style={styles.about}>
                <View style={styles.price}>
                  <Text style={styles.count}>{price}</Text>
                  <UiIcon
                    iconName="ruble"
                    iconColor="#333333"
                    iconSize={24}
                    style={styles.icon}
                  />
                </View>
                <UiCounter
                  value={counterValue}
                  setCounterValue={setCounterValue}
                  isVertical={false}
                />
              </View>
            </View>
          </View>
        </View>
      </Shadow>
    </>
  );
};

export default SBasketCard;
