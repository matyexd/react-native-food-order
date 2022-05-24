import React from 'react';
import {UiContainer, UiIcon} from '../../components/ui-kit';
import {styles} from './HistoryScreenStyle';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import {height, width} from '../../utils/Responsive';
import {UiContainerWP} from '../../components/ui-kit/UiContainer';
import HistoryCard from '../../components/HistoryCard/HistoryCardLast/HistoryCard';
import HistoryCardDay from '../../components/HistoryCard/HistoryCardToday/HistoryCardDay';

const HistoryScreen = props => {
  const data = [
    {
      id: 1,
      date: '24.05.2022',
      price: 230,
    },
    {
      id: 2,
      date: '23.05.2022',
      price: 225,
    },
    {
      id: 3,
      date: '22.05.2022',
      price: 202,
    },
    {
      id: 4,
      date: '21.05.2022',
      price: 196,
    },
    {
      id: 5,
      date: '20.05.2022',
      price: 215,
    },
  ];

  const goToProfile = () => {
    props.navigation.navigate('ProfileMain');
  };
  const renderItem = ({item}) => (
    <View style={styles.card} key={item.id}>
      <HistoryCard price={item.price} date={item.date} />
    </View>
  );
  return (
    <>
      <UiContainerWP>
        <View style={styles.title}>
          <TouchableOpacity onPress={goToProfile} style={styles.titleIcon}>
            <UiIcon iconName="arrowLeft" iconColor="#333333" />
          </TouchableOpacity>
          <Text style={styles.titleText}>История заказов</Text>
        </View>
        <View style={styles.cardOnDay}>
          <HistoryCardDay price="250" date="25.05.2022" />
        </View>
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: width(20),
            paddingTop: height(12),
          }}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </UiContainerWP>
    </>
  );
};

export default HistoryScreen;
