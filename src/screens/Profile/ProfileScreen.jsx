import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {UiProfileButton, UiContainer} from '../../components/ui-kit';
import {styles} from './ProfileScreenStyle';
import {connect} from 'react-redux';
import $api from '../../http';
import {logoutAction} from '../../store/actions/authAction';
import {ModalLogout} from '../../components';

const ProfileScreen = props => {
  async function testApi() {
    const response = await $api
      .get('/user')
      .then(response => response.data.data);
    console.log(response);
  }

  const data = [
    {
      id: 1,
      text: 'О приложении',
      icon: 'info',
      navigate: () => testApi(),
    },
    {
      id: 2,
      text: 'История заказов',
      icon: 'history',
      navigate: () => goToHistory(),
    },
    {
      id: 3,
      text: 'Выход',
      icon: 'logout',
      navigate: () => setVisible(true),
    },
  ];

  const [visible, setVisible] = useState(false);

  const closeModalCallback = () => {
    setVisible(false);
  };

  const goToHistory = () => {
    props.navigation.navigate('History');
  };
  const handleLogout = () => {
    props.logout();
    props.navigation.navigate('Auth');
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
        handleLogout={() => handleLogout()}
      />
    </>
  );
};

const mapStateToProps = state => ({authUser: state.authUser});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
