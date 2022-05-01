import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {UiButton, UiMainButton, UiContainer} from '../../components/ui-kit';
import {styles} from './FavouritesScreenStyle';

const FavouritesScreen = () => {
  return (
    <UiContainer>
      <View style={styles.logo}>
        <Image
          style={styles.imgLogo}
          source={require('./../../assets/img/logo.png')}
        />
      </View>
      <Text style={styles.hi}>Привет!</Text>
      <Text style={styles.text}>Давай заходи, кушать пора.</Text>
      <View style={styles.inputData}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Логин"
            placeholderTextColor="#999999"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Пароль"
            placeholderTextColor="#999999"
          />
        </View>
      </View>
      <View style={styles.button}>
        <UiButton text="Войти" />
      </View>
    </UiContainer>
  );
};

export default FavouritesScreen;
