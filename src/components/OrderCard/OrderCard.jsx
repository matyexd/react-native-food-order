import React, {useState} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {UiButton, UiCounter, UiIcon, UiMainButton} from '../ui-kit';
import {Shadow} from 'react-native-shadow-2';
import {styles} from './OrderCardStyle';
const OrderCard = props => {
  return (
    <>
      <Shadow viewStyle={{alignSelf: 'stretch'}} startColor="#00000015">
        <View style={styles.container}>
          <Image style={styles.img} source={props.image} />
          <View style={styles.info}>
            <View style={styles.gramm}>
              <View style={{flex: 1}}>
                <Text style={styles.header}>{props.name}</Text>
                <Text style={styles.calorie}>
                  {props.weight}гр {props.calories}Ккал
                </Text>
              </View>
            </View>
            <View style={styles.infoPrice}>
              <View style={styles.about}>
                <View style={styles.price}>
                  <Text style={styles.count}>
                    {parseFloat(props.price) * props.quantity}
                  </Text>
                  <UiIcon
                    iconName="ruble"
                    iconColor="#333333"
                    iconSize={24}
                    style={styles.icon}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Shadow>
    </>
  );
};

export default OrderCard;
