import React from 'react';
import {View, Text, FlatList} from 'react-native';
import SDishCard from '../../components/SDishCard';
import Search from '../../components/ui-kit/Search';
import {styles} from './HomeScreenStyle';

const HomeScreen = () => {
  const data = [
    {
      id: 1,
      name: 'Винегрет овощ',
      price: '40',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 2,
      name: 'Винегрет овощ',
      price: '70',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 3,
      name: 'Винегрет овощ',
      price: '60',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 4,
      name: 'Винегрет овощ',
      price: '80',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 5,
      name: 'Винегрет овощ',
      price: '40',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 6,
      name: 'Винегрет овощ',
      price: '70',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 7,
      name: 'Винегрет овощ',
      price: '60',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 8,
      name: 'Винегрет овощ',
      price: '80',
      calorie: '550',
      category: 'salad',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.card} key={item.id}>
      <SDishCard header={item.name} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Search />
      </View>
      <View style={styles.mainList}>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
