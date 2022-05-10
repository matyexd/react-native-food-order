import React, {useState} from 'react';
import {View, Text, Image, TextInput, Keyboard} from 'react-native';
import {UiButton, UiMainButton, UiContainer} from '../../components/ui-kit';
import {styles} from './AuthenticationScreenStyle';

const AuthenticationScreen = props => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onChangeLogin = val => {
    setLoginError('');
    setLogin(val);
  };

  const onChangePassword = val => {
    setPasswordError('');
    setPassword(val);
  };

  const handleLogin = () => {
    if (!login) {
      setLoginError('Введите Ваш логин');
    }
    if (!password) {
      setPasswordError('Введите Ваш пароль');
      return;
    }

    if (password && login) {
      // props.navigation.navigate('TabNavigator');
      alert('что');
    }
  };

  return (
    <UiContainer>
      <View style={styles.addContainer}>
        <View style={styles.logo}>
          <Image
            style={styles.imgLogo}
            source={require('./../../assets/img/logo.png')}
          />
        </View>

        <View style={styles.inputData}>
          <View style={loginError ? styles.inputError : styles.input}>
            <TextInput
              style={styles.inputText}
              placeholder="Логин"
              placeholderTextColor="#999999"
              onChangeText={val => onChangeLogin(val)}
              value={login}
            />
          </View>
          <Text style={styles.loginError}>{loginError}</Text>
          <View style={passwordError ? styles.inputError : styles.input}>
            <TextInput
              style={styles.inputText}
              placeholder="Пароль"
              placeholderTextColor="#999999"
              onChangeText={val => onChangePassword(val)}
              value={password}
            />
          </View>
          <Text style={styles.loginError}>{passwordError}</Text>

          <View style={styles.button}>
            <UiButton text="Войти" onPress={() => handleLogin()} />
          </View>
        </View>
      </View>
    </UiContainer>
  );
};

export default AuthenticationScreen;
