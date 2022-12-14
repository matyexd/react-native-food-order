import React, {useState} from 'react';
import {View, Text, Image, Platform} from 'react-native';
import {UiProfileButton, UiContainer} from '../../components/ui-kit';
import {styles} from './ProfileScreenStyle';
import {connect} from 'react-redux';
import {logoutAction} from '../../store/actions/authAction';
import {ModalLogout} from '../../components';
import {CommonActions} from '@react-navigation/native';
import {deleteTokenFromServer} from '../../http/notifService';
import {retrieveUserSession} from '../../storage';

const ProfileScreen = props => {
  const data = [
    {
      id: 1,
      text: 'О приложении',
      icon: 'info',
      navigate: () => goToAboutApp(),
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

  const goToAboutApp = () => {
    props.navigation.navigate('AboutApp');
  };

  const goToHistory = () => {
    props.navigation.navigate('History');
  };

  async function handleLogout() {
    if (Platform.OS !== 'ios') {
      try {
        let fcmtoken = await retrieveUserSession('fcmtoken');
        fcmtoken = await JSON.parse(fcmtoken);
        await deleteTokenFromServer(fcmtoken.fcmTokenId);
        console.log('delete FCM token from server success');
      } catch (e) {
        console.log(e);
      }
    }
    props.logout();
    props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Auth'}],
      }),
    );
  }

  return (
    <>
      <UiContainer>
        <View>
          <Text style={styles.title}>Профиль</Text>
        </View>
        <View style={styles.ava}>
          <Image source={require('./../../assets/img/ava.png')} />
        </View>
        <Text style={styles.name}>{props.authUser.user.name}</Text>
        <Text style={styles.info}>{props.authUser.user.floor}</Text>
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
