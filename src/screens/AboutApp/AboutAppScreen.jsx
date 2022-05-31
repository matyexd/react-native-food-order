import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {UiContainer, UiContainerWP, UiIcon} from '../../components/ui-kit';
import {styles} from './AboutAppScreenStyle';

const AboutAppScreen = props => {
  const goToProfile = () => {
    props.navigation.navigate('ProfileMain');
  };

  return (
    <UiContainer>
      <View style={styles.title}>
        <TouchableOpacity onPress={goToProfile} style={styles.titleIcon}>
          <UiIcon iconName="arrowLeft" iconColor="#333333" />
        </TouchableOpacity>
        <Text style={styles.titleText}>О приложении</Text>
      </View>
      <View>
        <Text style={styles.listTitle}>Версия приложения:</Text>
        <View>
          <Text style={styles.listText}>S.H.I.E.L.D.003</Text>
        </View>
      </View>
      <View style={styles.blockText}>
        <Text style={styles.listTitle}>Команда разработки:</Text>
        <View>
          <Text style={styles.listText}> • Дарья Швецова</Text>
          <Text style={styles.listText}> • Матвей Мамочкин</Text>
          <Text style={styles.listText}> • Артем Емельянов</Text>
          <Text style={styles.listText}> • Алексей Панченко</Text>
        </View>
      </View>
    </UiContainer>
  );
};

export default AboutAppScreen;
