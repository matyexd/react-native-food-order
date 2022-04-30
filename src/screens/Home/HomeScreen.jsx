import React from 'react';
import {View, Text, FlatList} from 'react-native';
import SDishCard from '../../components/SDishCard';

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
      name: 'Винегрет овощной1',
      price: '70',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 3,
      name: 'Винегрет овощной2',
      price: '60',
      calorie: '550',
      category: 'salad',
    },
    {
      id: 4,
      name: 'Винегрет овощной3',
      price: '80',
      calorie: '550',
      category: 'salad',
    },
  ];

  const renderItem = ({item}) => (
    <View key={item.id}>
      <SDishCard header={item.name} />
    </View>
  );

  return (
    <View>
      <View>
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
