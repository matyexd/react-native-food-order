import React from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import {OrderCard} from '../../components';
import {UiContainerWP, UiIcon} from '../../components/ui-kit';
import {height, width} from '../../utils/Responsive';
import {styles} from './OrderScreenStyle';

const OrderScreen = props => {
  const products = props.route.params.params.products;
  const data = [
    {
      id: 1,
      name: 'Винегрет овощной',
      date: '24.05.2022',
      price: 230,
      gramm: '220/12',
      calories: '300',
      image: require('./../../assets/img/salat.png'),
    },
    {
      id: 2,
      name: 'Винегрет овощной',
      date: '23.05.2022',
      price: 225,
      gramm: '220/12',
      calories: '300',
      image: require('./../../assets/img/salat.png'),
    },
    {
      id: 3,
      name: 'Винегрет овощной',
      date: '22.05.2022',
      price: 202,
      gramm: '220/12',
      calories: '300',
      image: require('./../../assets/img/salat.png'),
    },
    {
      id: 4,
      name: 'Винегрет овощной',
      date: '21.05.2022',
      price: 196,
      gramm: '220/12',
      calories: '300',
      image: require('./../../assets/img/salat.png'),
    },
    {
      id: 5,
      name: 'Винегрет овощной',
      date: '20.05.2022',
      price: 215,
      gramm: '220/12',
      calories: '300',
      image: require('./../../assets/img/salat.png'),
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.card} key={item.id}>
      <OrderCard
        price={item.price}
        date={item.date}
        name={item.name}
        calories={item.calories}
        gramm={item.gramm}
        image={item.image}
      />
    </View>
  );
  return (
    <>
      <UiContainerWP>
        <View style={styles.title}>
          <TouchableOpacity
            style={styles.titleIcon}
            onPress={() => props.navigation.navigate('History')}>
            <UiIcon iconName="arrowLeft" iconColor="#333333" />
          </TouchableOpacity>
          <Text style={styles.titleText}>
            Заказ на {props.route.params.params.orderDate}
          </Text>
        </View>
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: width(20),
            paddingTop: height(12),
          }}
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </UiContainerWP>
    </>
  );
};

export default OrderScreen;
