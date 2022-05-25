import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {UiProfileButton, UiContainer} from '../../components/ui-kit';
import {styles} from './ProfileScreenStyle';
import {ModalLogout} from '../../components/ModalLogout';
import {connect} from 'react-redux';
import {logoutAction} from '../../store/actions/authAction';

const ProfileScreen = props => {
  const data = [
    {
      id: 1,
      text: 'О приложении',
      icon: 'info',
      navigate: () => console.log('о приложении'),
    },
    {
      id: 2,
      text: 'Выход',
      icon: 'logout',
      navigate: () => setVisible(true),
    },

    {
      id: 3,
      text: 'История заказов',
      icon: 'info',
      navigate: () => goToHistory(),
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

  console.log(props.authUser);

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
