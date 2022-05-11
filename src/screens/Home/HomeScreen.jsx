import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import SDishCard from '../../components/SDishCard';
import {
  UiIcon,
  UiSearch,
  UiDropdown,
  UiContainerHome,
} from '../../components/ui-kit';
import {styles} from './HomeScreenStyle';
import InfoModal from '../../components/SModal/SModal';
import {data} from '../../temp/menu';
import {height, width} from '../../utils/Responsive';
import {addProductAction} from '../../store/actions/basketActions';
import {connect} from 'react-redux';

const HomeScreen = props => {
  const categories = [
    'Комплексный обед',
    'Салаты',
    'Супы',
    'Горячее из мяса',
    'Горячее из птицы',
    'Горячее из рыбы',
    'Гарниры',
    'Мучные изделия',
    'Напитки и соки',
    'Соусы',
    'Пельмени и вареники',
    'Прочее',
    'Пироги и торты',
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
      <SDishCard product={item} addToBasket={addProductCallback} />
    </TouchableOpacity>
  );
  const [filterData, setFilterData] = useState(data);
  const filterByCategory = category => {
    const newData = data.filter(pr => pr.category == category);
    setFilterData(newData);
  };

  useEffect(() => {
    filterByCategory('Комплексный обед');
  }, []);

  const addProductCallback = product => {
    props.addProduct(product);
  };

  return (
    <>
      <UiContainerHome>
        <View style={styles.header}>
          <Text style={styles.limitLabel}>Меню</Text>
          <View style={styles.limitPrice}>
            <Text style={styles.limitCount}>230</Text>
            <UiIcon
              iconName="ruble"
              iconColor="#333333"
              style={styles.icon}
              iconSize={24}
            />
          </View>
        </View>
        <View>
          <View style={{paddingHorizontal: width(20)}}>
            <UiSearch />
          </View>
          <View style={styles.dropdown}>
            <UiDropdown
              titleDropdown="Комплексный обед"
              items={categories}
              filter={filterByCategory}
            />
          </View>
        </View>
        <View style={styles.mainList}>
          <FlatList
            contentContainerStyle={{
              paddingHorizontal: width(20),
              paddingTop: height(12),
            }}
            data={filterData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </UiContainerHome>
      <InfoModal
        item={item}
        isVisible={visible}
        closeModal={closeModalCallback}
      />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addProductAction(product)),
});

export default connect(null, mapDispatchToProps)(HomeScreen);
