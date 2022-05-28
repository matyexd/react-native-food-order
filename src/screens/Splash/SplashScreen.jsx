import React, {useEffect} from 'react';
import {Image, View, Text} from 'react-native';
import {styles} from './SplashScreenStyle';
import {connect} from 'react-redux';

import {UIActivityIndicator} from 'react-native-indicators';
import {
  checkLogin,
  clearAuthUserStoreAction,
  loginAction,
} from '../../store/actions/authAction';
import {
  getCategoriesAction,
  getMenuActions,
} from '../../store/actions/menuActions';
import useUploadData from '../../hooks/useUploadData';
import {CommonActions} from '@react-navigation/native';

const SplashScreenAfterAuth = props => {
  const isUploadData = useUploadData(
    props.userAuth,
    props.products,
    props.categories,
  );

  useEffect(() => {
    props.getMenu('2022-12-13');
    props.getCategories();
  }, []);

  useEffect(() => {
    if (isUploadData) {
      props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'TabNavigator'}],
        }),
      );
      // props.navigation.navigate('TabNavigator');
    }
  }, [isUploadData]);

  // useEffect(() => {
  //   props.getUserInfo();
  // }, []);
  //
  // useEffect(() => {
  //   if (!props.userAuth.isLoadingSplash) {
  //     if (
  //       !props.userAuth.errorCheckAuth &&
  //       Object.keys(props.userAuth.user).length !== 0
  //     ) {
  //       setTimeout(async () => {
  //         props.navigation.navigate('TabNavigator');
  //       }, 1000);
  //     }
  //   }
  // }, [props.userAuth]);

  console.log(123);

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
  categories: store.categories,
  userAuth: store.authUser,
  products: store.products,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategoriesAction()),
  getUserInfo: () => dispatch(checkLogin()),
  getMenu: date => dispatch(getMenuActions(date)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreenAfterAuth);
