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
import {height, width} from '../../utils/Responsive';
import {
  addProductAction,
  changeProductCountAction,
} from '../../store/actions/basketActions';
import {connect} from 'react-redux';

const HomeScreen = props => {
  const categories = props.categories.categories;
  const data = props.products.products;

  const [item, setItem] = useState();
  const [visible, setVisible] = useState(false);
  const [filterData, setFilterData] = useState(data);

  useEffect(() => {
    filterByCategory(categories[0].id);
  }, []);

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

  const filterByCategory = category => {
    const newData = data.filter(pr => pr.category === category);
    setFilterData(newData);
  };

  const addProductCallback = product => {
    console.log(product);
    props.addProduct(product);
  };
  const setProductCount = (product, count) => {
    props.changeCount(product, count);
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
              titleDropdown={categories[0].categoryName}
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
        product={item}
        addToBasket={addProductCallback}
        isVisible={visible}
        closeModal={closeModalCallback}
        setProductCount={setProductCount}
      />
    </>
  );
};

const mapStateToProps = store => ({
  products: store.products,
  categories: store.categories,
});

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addProductAction(product)),
  changeCount: (product, count) =>
    dispatch(changeProductCountAction(product, count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
