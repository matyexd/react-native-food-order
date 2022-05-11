import React, {useEffect} from 'react';
import {Image, View, Text} from 'react-native';
import {styles} from './SplashScreenStyle';

import {UIActivityIndicator} from 'react-native-indicators';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(async () => {
      props.navigation.navigate('TabNavigator');
    }, 0);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('./../../assets/img/logo.png')} />
      </View>
      <View style={styles.helloTitle}>
        <Text style={styles.helloTitleText}>Привет, Алексей</Text>
      </View>
      <View style={styles.loading}>
        <UIActivityIndicator color={'#AAAAAA'} size={30} />
      </View>
    </View>
  );
};

export default SplashScreen;
