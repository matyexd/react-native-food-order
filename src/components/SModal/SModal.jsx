import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './SModalStyle';
import {UiCounter, UiIcon, UiMainButton} from '../ui-kit';

const InfoModal = props => {
  const {isVisible, item, closeModal} = props;
  const [counterValue, setCounterValue] = useState(0);

  return (
    <Modal
      style={styles.infoModal}
      isVisible={isVisible}
      animationIn={'slideInUp'}
      backdropColor={'black'}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      backdropOpacity={0.6}>
      <View style={styles.modal}>
        <ImageBackground source={item?.image} style={styles.image}>
          <View style={styles.icon}>
            <TouchableOpacity style={styles.iconClose} onPress={closeModal}>
              <UiIcon iconName="close" iconColor={'black'} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.container}>
          <View style={styles.about}>
            <View>
              <Text style={styles.header}>{item?.name}</Text>
              <Text style={styles.gramm}>
                {item?.gramm} гр {item?.calorie} Ккал
              </Text>
            </View>
            <TouchableOpacity style={styles.iconFavorite}>
              <UiIcon iconName="favorites" iconColor="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>{item?.description}</Text>
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
