import React from 'react';
import Modal from 'react-native-modal';
import {View, Text} from 'react-native';
import {styles} from './ModalMessageSuccessStyle';

const ModalMessageSuccess = ({modalVisible, setModalVisible, text}) => {
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
      <View style={styles.back}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalMessageSuccess;
