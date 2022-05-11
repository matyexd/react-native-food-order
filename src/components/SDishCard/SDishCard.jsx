import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {UiIcon, UiMainButton} from '../ui-kit';
import {styles} from './SDishCardStyle';
import {Shadow} from 'react-native-shadow-2';

const SDishCard = props => {
  const {product, addToBasket} = props;
  const onPressAddProductHandler = () => {
    addToBasket(product);
  };

  return (
    <Shadow viewStyle={{alignSelf: 'stretch'}} startColor="#00000015">
      <View style={styles.container}>
        <Image style={styles.img} source={product.image} />
        <View style={styles.info}>
          <Text style={styles.header}>{product.name}</Text>
          <Text style={styles.calorie}>
            {product.gramm}гр {product.calorie}Ккал
          </Text>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
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
              <UiMainButton
                text="Добавить"
                onPress={onPressAddProductHandler}
              />
            </View>
          </View>
        </View>
      </View>
    </Shadow>
  );
};

export default SDishCard;
