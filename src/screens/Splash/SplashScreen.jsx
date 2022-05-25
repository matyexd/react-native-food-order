import React, {useEffect} from 'react';
import {Image, View, Text} from 'react-native';
import {styles} from './SplashScreenStyle';
import {connect} from 'react-redux';

import {UIActivityIndicator} from 'react-native-indicators';
import {
  clearAuthUserStoreAction,
  loginAction,
} from '../../store/actions/authAction';

const SplashScreenAfterAuth = props => {
  useEffect(() => {
    setTimeout(async () => {
      props.navigation.navigate('TabNavigator');
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('./../../assets/img/logo.png')} />
      </View>
      <View style={styles.helloTitle}>
        <Text style={styles.helloTitleText}>
          Привет, {props.userAuth.user.name}
        </Text>
      </View>
      <View style={styles.loading}>
        <UIActivityIndicator color={'#AAAAAA'} size={30} />
      </View>
    </View>
  );
};

const mapStateToProps = store => ({
  userAuth: store.authUser,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreenAfterAuth);
