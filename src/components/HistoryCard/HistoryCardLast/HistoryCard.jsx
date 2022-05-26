import React from 'react';
import {styles} from './HistoryCardStyle';
import {Shadow} from 'react-native-shadow-2';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {UiIcon} from '../../ui-kit';

const HistoryCard = props => {
  return (
    <>
      <Shadow viewStyle={{alignSelf: 'stretch'}} startColor="#00000015">
        <View style={styles.container}>
          <Text style={styles.dateText}>{props.date}</Text>
          <View style={styles.price}>
            <Text style={styles.priceText}>{props.price}</Text>
            <UiIcon
              iconName="ruble"
              iconColor="#333333"
              iconSize={25}
              style={styles.priceIcon}
            />
          </View>
        </View>
      </Shadow>
    </>
  );
};

export default HistoryCard;
