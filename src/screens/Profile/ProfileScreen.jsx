import React from 'react';
import {View, Text, Image} from 'react-native';
import {UiProfileButton} from '../../components/ui-kit';
import {styles} from './ProfileScreenStyle';

const ProfileScreen = () => {
  const data1 = [
    {id: 1, text: 'Избранное', style: styles.button},
    {id: 2, text: 'Редактировать заказ', style: styles.button},
    {id: 3, text: 'Уведомления', style: styles.button},
  ];
  const data2 = [
    {id: 4, text: 'История заказов', style: styles.button},
    {id: 5, text: 'Личные данные', style: styles.button},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.ava}>
        <Image source={require('./../../assets/img/ava.png')} />
      </View>
      <Text style={styles.name}>Сергей</Text>
      <Text style={styles.status}>Любитель пирожков</Text>
      <View style={styles.data1}>
        {data1.map(button => {
          return (
            <View style={button.style} key={button.id}>
              <UiProfileButton text={button.text} />
            </View>
          );
        })}
      </View>
      <View style={styles.data2}>
        {data2.map(button => {
          return (
            <View style={button.style} key={button.id}>
              <UiProfileButton text={button.text} />
            </View>
          );
        })}
      </View>
      <UiProfileButton text="Выход" />
    </View>
  );
};

export default ProfileScreen;
