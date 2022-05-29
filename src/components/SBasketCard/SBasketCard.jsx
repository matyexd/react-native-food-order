import React, {useState} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {UiButton, UiCounter, UiIcon, UiMainButton} from '../ui-kit';
import {Shadow} from 'react-native-shadow-2';
import {styles} from './SBasketCardStyle';
import {Button} from 'react-native-paper';

const SBasketCard = props => {
  const {product, count, setCount, deleteProduct} = props;

  const onPressDeleteHandler = () => {
    deleteProduct(product);
  };

  return (
    <>
      <Shadow viewStyle={{alignSelf: 'stretch'}} startColor="#00000015">
        <View style={styles.container}>
          <Image style={styles.img} source={product.image} />
          <View style={styles.info}>
            <View style={styles.gramm}>
              <View style={{flex: 1}}>
                <Text style={styles.header}>{product.name}</Text>
                <Text style={styles.calorie}>
                  {product.weight}гр {product.calories}Ккал
                </Text>
              </View>
              <TouchableOpacity
                style={styles.trash}
                onPress={onPressDeleteHandler}>
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
                  <Text style={styles.count}>{product.price}</Text>
                  <UiIcon
                    iconName="ruble"
                    iconColor="#333333"
                    iconSize={24}
                    style={styles.icon}
                  />
                </View>
                <UiCounter
                  value={count}
                  setCounterValue={count => setCount(product, count)}
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
