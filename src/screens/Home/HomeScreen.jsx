import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import SDishCard from '../../components/SDishCard';
import {UiIcon, UiSearch} from '../../components/ui-kit';
import {styles} from './HomeScreenStyle';
import InfoModal from '../../components/SModal/SModal';

const HomeScreen = () => {
  const data = [
    {
      id: 1,
      name: 'Винегрет овощной',
      price: '40',
      calorie: '550',
      category: 'salad',
      description:
        'Свекла, морковь, картофель, капуста, зеленый горошек, масло растительное',
      image: require('./../../assets/img/salat.png'),
      gramm: '100',
    },
    {
      id: 2,
      name: 'Винегрет овощной',
      price: '70',
      calorie: '550',
      category: 'salad',
      description:
        'Свекла, морковь, картофель, капуста, зеленый горошек, масло растительное',
      image: require('./../../assets/img/salat.png'),
      gramm: '100',
    },
    {
      id: 3,
      name: 'Винегрет овощной',
      price: '60',
      calorie: '550',
      category: 'salad',
      description:
        'Свекла, морковь, картофель, капуста, зеленый горошек, масло растительное',
      image: require('./../../assets/img/salat.png'),
      gramm: '100',
    },
    {
      id: 4,
      name: 'Винегрет овощной',
      price: '80',
      calorie: '550',
      category: 'salad',
      description:
        'Свекла, морковь, картофель, капуста, зеленый горошек, масло растительное',
      image: require('./../../assets/img/salat.png'),
      gramm: '100',
    },
    {
      id: 5,
      name: 'Винегрет овощной',
      price: '40',
      calorie: '550',
      category: 'salad',
      description:
        'Свекла, морковь, картофель, капуста, зеленый горошек, масло растительное',
      image: require('./../../assets/img/salat.png'),
      gramm: '100',
    },
    {
      id: 6,
      name: 'Винегрет овощной',
      price: '70',
      calorie: '550',
      category: 'salad',
      description:
        'Свекла, морковь, картофель, капуста, зеленый горошек, масло растительное',
      image: require('./../../assets/img/salat.png'),
      gramm: '100',
    },
    {
      id: 7,
      name: 'Винегрет овощной',
      price: '60',
      calorie: '550',
      category: 'salad',
      description:
        'Свекла, морковь, картофель, капуста, зеленый горошек, масло растительное',
      image: require('./../../assets/img/salat.png'),
      gramm: '100',
    },
    {
      id: 8,
      name: 'Винегрет овощной',
      price: '80',
      calorie: '550',
      category: 'salad',
      description:
        'Свекла, морковь, картофель, капуста, зеленый горошек, масло растительное',
      image: require('./../../assets/img/salat.png'),
      gramm: '100',
    },
  ];
  const [item, setItem] = useState();
  const [visible, setVisible] = useState(false);
  const onPressCardHandler = obj => {
    setVisible(true);
    setItem(obj);
  };

  const closeModalCallback = () => {
    setVisible(false);
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      key={item.id}
      onPress={() => onPressCardHandler(item)}>
      <SDishCard
        header={item.name}
        price={item.price}
        gramm={100}
        image={item.image}
      />
    </TouchableOpacity>
  );

  return (
    <>
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
      <InfoModal
        item={item}
        isVisible={visible}
        closeModal={closeModalCallback}
      />
    </>
  );
};

export default HomeScreen;
