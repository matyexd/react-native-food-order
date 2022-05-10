import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './SModalStyle';
import {UiCounter, UiIcon, UiMainButton} from '../ui-kit';

const InfoModal = props => {
  const {isVisible, item, closeModal} = props;
  const [counterValue, setCounterValue] = useState(1);

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
        <Image source={item?.image} style={styles.image} />
        <View style={styles.container}>
          <View style={styles.about}>
            <View>
              <Text style={styles.header}>{item?.name}</Text>
              <Text style={styles.gramm}>
                {item?.gramm} гр {item?.calorie} Ккал
              </Text>
            </View>
          </View>
          {item?.description?.length > 0 && (
            <Text style={styles.description}>{item?.description}</Text>
          )}
          <View>
            <View style={styles.price}>
              <Text style={styles.count}>{item?.price}</Text>
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
                setCounterValue={setCounterValue}
                isVertical={false}
              />
            </View>
            <View style={styles.button}>
              <UiMainButton text="Добавить" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;
