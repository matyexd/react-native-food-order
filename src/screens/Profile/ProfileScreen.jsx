import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {UiProfileButton, UiContainer} from '../../components/ui-kit';
import {styles} from './ProfileScreenStyle';

const ProfileScreen = props => {
  const data = [
    {id: 1, text: 'Личные данные', icon: 'settings'},
    {id: 2, text: 'Выход', icon: 'logout'},
  ];

  return (
    <ScrollView>
      <UiContainer>
        <View>
          <Text style={styles.title}>Профиль</Text>
        </View>
        <View style={styles.ava}>
          <Image source={require('./../../assets/img/ava.png')} />
        </View>
        <Text style={styles.name}>Сергей</Text>
        <View style={styles.data1}>
          {data.map(button => {
            return (
              <View key={button.id} style={styles.button}>
                <UiProfileButton
                  text={button.text}
                  // style={styles.button}
                  iconName={button.icon}
                  onPress={() => props.navigation.navigate('Auth')}
                />
              </View>
            );
          })}
        </View>
      </UiContainer>
    </ScrollView>
  );
};

export default ProfileScreen;
