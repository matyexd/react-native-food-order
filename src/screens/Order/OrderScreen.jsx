import React from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import OrderCard from '../../components/OrderCard/OrderCard';
import {UiIcon} from '../../components/ui-kit';
import {UiContainerWP} from '../../components/ui-kit/UiContainer';
import {height, width} from '../../utils/Responsive';
import {styles} from './OrderScreenStyle';

const OrderScreen = () => {
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

  const goToProfile = () => {
    props.navigation.navigate('ProfileMain');
  };
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
          <TouchableOpacity style={styles.titleIcon}>
            <UiIcon
              iconName="arrowLeft"
              iconColor="#333333"
              onPress={goToProfile}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>Заказ на 18.05.2022</Text>
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

export default OrderScreen;
