import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {UiProfileButton, UiContainer} from '../../components/ui-kit';
import {styles} from './ProfileScreenStyle';
import {ModalLogout} from '../../components/ModalLogout';

const ProfileScreen = props => {
  const data = [
    {
      id: 1,
      text: 'О приложении',
      icon: 'settings',
      navigate: () => console.log('О приложении'),
    },
    {
      id: 2,
      text: 'Выход',
      icon: 'logout',
      navigate: () => setVisible(true),
    },
  ];

  const [visible, setVisible] = useState(false);

  const closeModalCallback = () => {
    setVisible(false);
  };

  return (
    <>
      <UiContainer>
        <View>
          <Text style={styles.title}>Профиль</Text>
        </View>
        <View style={styles.ava}>
          <Image source={require('./../../assets/img/ava.png')} />
        </View>
        <Text style={styles.name}>Сергей</Text>
        <Text style={styles.info}>7 этаж</Text>
        <View style={styles.data1}>
          {data.map(button => {
            return (
              <View key={button.id} style={styles.button}>
                <UiProfileButton
                  text={button.text}
                  // style={styles.button}
                  iconName={button.icon}
                  onPress={button.navigate}
                />
              </View>
            );
          })}
        </View>
      </UiContainer>
      <ModalLogout
        isVisible={visible}
        closeModal={closeModalCallback}
        handleLogout={() => props.navigation.navigate('Auth')}
      />
    </>
  );
};

export default ProfileScreen;
