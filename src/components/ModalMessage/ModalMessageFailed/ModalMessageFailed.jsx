import React from 'react';
import Modal from 'react-native-modal';
import {View, Text} from 'react-native';
import {styles} from './ModalMessageFailedStyle';

const ModalMessageFailed = ({modalVisible, setModalVisible}) => {
  const showModal = () => {
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };
  return (
    <Modal
      style={styles.main}
      isVisible={modalVisible}
      animationIn={'slideInUp'}
      animationOut={'slideOutUp'}
      backdropColor={'white'}
      backdropOpacity={0.1}
      onModalShow={showModal}>
      <View style={styles.modal}>
        <Text style={styles.modalText}>
          Заказ не отправлен, попробуйте позже
        </Text>
      </View>
    </Modal>
  );
};

export default ModalMessageFailed;
