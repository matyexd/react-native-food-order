import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './ModalLogoutStyle';
import {UiButton} from '../ui-kit';

const InfoModal = ({isVisible, closeModal, handleLogout}) => {
  const logout = () => {
    closeModal();
    handleLogout();
  };

  return (
    <View>
      <Modal
        isVisible={isVisible}
        style={styles.modalLogout}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}>
        <View>
          <View style={styles.logoutMessage}>
            <Text style={styles.logoutMessageText}>
              Вы уверены, что хотите выйти?
            </Text>
          </View>
          <UiButton
            text={'Выйти'}
            style={styles.buttonLogout}
            textStyle={{color: '#de3221'}}
            onPress={logout}
          />
          <UiButton
            text={'Отмена'}
            style={styles.buttonCancel}
            textStyle={{color: 'black'}}
            onPress={closeModal}
          />
        </View>
      </Modal>
    </View>
  );
};

export default InfoModal;
