import React, {useState} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {UiCounter, UiIcon, UiMainButton, UiSearch} from '../ui-kit';
import {Shadow} from 'react-native-shadow-2';
import {styles} from './SBasketCardStyle';

const SBasketCard = props => {
  const {header, calorie, gramm, price, image} = props;
  const onPressHandler = () => {
    console.log('Нажата кнопка');
  };
  const [counterValue, setCounterValue] = useState(1);
  return (
    <Shadow viewStyle={{alignSelf: 'stretch'}} startColor="#00000015">
      <View style={styles.container}>
        <Image style={styles.img} source={image} />
        <View style={styles.info}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.header}>{header}</Text>
              <Text style={styles.calorie}>
                {gramm}гр {calorie}Ккал
              </Text>
            </View>
            <TouchableOpacity style={{justifyContent: 'center'}}>
              <UiIcon
                iconName="trash"
                iconColor="#000"
                iconSize={24}
                style={styles.trashIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
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
  );
};

export default SBasketCard;
