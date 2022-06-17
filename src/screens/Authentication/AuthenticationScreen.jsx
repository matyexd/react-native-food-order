import React, {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, KeyboardAvoidingView} from 'react-native';
import {UiButton, UiContainer} from '../../components/ui-kit';
import {styles} from './AuthenticationScreenStyle';
import {connect} from 'react-redux';
import {
  checkLogin,
  clearAuthUserStoreAction,
  loginAction,
} from '../../store/actions/authAction';
import {UIActivityIndicator} from 'react-native-indicators';

const AuthenticationScreen = props => {
  const {user, isAuth, isLoading, errors} = props.userAuth;
  const [successFetching, setSuccessFetching] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [generalError, setGeneralError] = useState('');

  const onFocusInput = () => {
    setLoginError('');
    setPasswordError('');
    setGeneralError('');
    props.clearAuthUserStore();
  };

  const handleLogin = () => {
    if (!login) {
      setLoginError('Введите логин');
    }
    if (!password) {
      setPasswordError('Введите пароль');
      return;
    }

    if (password && login) {
      setDisableButton(false);
      setLoginError('');
      setPasswordError('');
      props.login(login, password);
    }
  };

  useEffect(() => {
    console.log(errors);
    if (
      errors.login.length === 0 &&
      errors.password.length === 0 &&
      isAuth &&
      errors.generalError.length === 0
    ) {
      if (!successFetching) {
        props.getUserInfo();
        setSuccessFetching(true);
      }
      if (Object.keys(user).length !== 0) {
        props.navigation.navigate('Splash');
      }
    } else if (errors.login.length !== 0) {
      setLoginError('Неверно введен логин');
      setDisableButton(true);
    } else if (errors.password.length !== 0) {
      setPasswordError('Неверно введен пароль');
      setDisableButton(true);
    } else if (errors.generalError.length !== 0) {
      setGeneralError('Неверный логин или пароль');
      setDisableButton(true);
    }
  }, [props.userAuth]);

  return (
    <UiContainer>
      <View style={styles.addContainer}>
        <View style={styles.logo}>
          <Image
            style={styles.imgLogo}
            source={require('./../../assets/img/logo.png')}
          />
        </View>

        <KeyboardAvoidingView style={styles.inputData} behavior={'padding'}>
          {generalError.length > 0 && (
            <View style={styles.generalError}>
              <Text style={styles.generalErrorText}>{generalError}</Text>
            </View>
          )}
          <View
            style={
              loginError || generalError ? styles.inputError : styles.input
            }>
            <TextInput
              style={styles.inputText}
              placeholder="Логин"
              placeholderTextColor="#999999"
              onChangeText={val => setLogin(val)}
              onFocus={() => onFocusInput()}
              value={login}
            />
          </View>
          <Text style={styles.loginError}>{loginError}</Text>
          <View
            style={
              passwordError || generalError ? styles.inputError : styles.input
            }>
            <TextInput
              style={styles.inputText}
              placeholder="Пароль"
              placeholderTextColor="#999999"
              secureTextEntry={true}
              onChangeText={val => setPassword(val)}
              onFocus={() => onFocusInput()}
              value={password}
            />
          </View>
          <Text style={styles.loginError}>{passwordError}</Text>

          <View style={styles.button}>
            {isLoading ? (
              <UIActivityIndicator color={'#AAAAAA'} size={20} />
            ) : (
              <UiButton
                disabled={!disableButton}
                text={isLoading ? 'Загрузка...' : 'Войти'}
                onPress={() => handleLogin()}
              />
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    </UiContainer>
  );
};

const mapStateToProps = store => ({
  userAuth: store.authUser,
});

const mapDispatchToProps = dispatch => ({
  login: (login, password) => dispatch(loginAction(login, password)),
  clearAuthUserStore: () => dispatch(clearAuthUserStoreAction()),
  getUserInfo: () => dispatch(checkLogin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthenticationScreen);
