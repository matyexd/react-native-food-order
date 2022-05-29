import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './SModalStyle';
import {UiCounter, UiIcon, UiMainButton} from '../ui-kit';

const InfoModal = props => {
  const {isVisible, product, closeModal, addToBasket, setProductCount, count} =
    props;
  const [counterValue, setCounterValue] = useState(count);
  const addProductHandler = () => {
    addToBasket(product);
  };
  const addProduct = () => {
    addProductHandler(product);
    setProductCount(product, counterValue);
  };
  return (
    <Modal
      useNativeDriverForBackdrop={true}
      onSwipeComplete={swipeDirection => closeModal()}
      swipeThreshold={100}
      swipeDirection={'down'}
      style={styles.infoModal}
      isVisible={isVisible}
      animationIn={'slideInUp'}
      backdropColor={'black'}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      backdropOpacity={0.6}>
      <View style={styles.modal}>
        <Image source={product?.image} style={styles.image} />
        <View style={styles.container}>
          <View style={styles.about}>
            <View>
              <Text style={styles.header}>{product?.name}</Text>
              <Text style={styles.gramm}>
                {product?.weight} гр {product?.calories} Ккал
              </Text>
            </View>
          </View>
          {product?.description?.length > 0 && (
            <Text style={styles.description}>{product?.description}</Text>
          )}
          <View>
            <View style={styles.price}>
              <Text style={styles.count}>{product?.price}</Text>
              <UiIcon
                iconName="ruble"
                iconColor="#333333"
                iconSize={25}
                style={styles.iconPrice}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.counter}>
              <UiCounter
                value={counterValue}
                setCounterValue={
                  setCounterValue /*count => setProductCount(product, count)*/
                }
                isVertical={false}
              />
            </View>
            <View style={styles.button}>
              <UiMainButton text="Добавить" onPress={addProduct} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;
