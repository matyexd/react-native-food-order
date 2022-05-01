import React from 'react';
import {View, Text, FlatList} from 'react-native';
import SDishCard from '../../components/SDishCard';
import {UiIcon, UiSearch} from '../../components/ui-kit';
import {styles} from './HomeScreenStyle';

const HomeScreen = () => {
  const data = [
    {
      id: 1,
      name: 'Винегрет овощной',
      price: '40',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 2,
      name: 'Винегрет овощной',
      price: '70',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 3,
      name: 'Винегрет овощной',
      price: '60',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 4,
      name: 'Винегрет овощной',
      price: '80',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 5,
      name: 'Винегрет овощной',
      price: '40',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 6,
      name: 'Винегрет овощной',
      price: '70',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 7,
      name: 'Винегрет овощной',
      price: '60',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 8,
      name: 'Винегрет овощной',
      price: '80',
      calorie: '550',
      category: 'salad',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.card} key={item.id}>
      <SDishCard header={item.name} price={item.price} gramm={100} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.limitLabel}>Осталось потратить</Text>
        <View style={styles.limitPrice}>
          <Text style={styles.limitCount}>230</Text>
          <UiIcon iconName="ruble" iconColor="#333333" style={styles.icon} />
        </View>
      </View>
      <View>
        <UiSearch />
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
