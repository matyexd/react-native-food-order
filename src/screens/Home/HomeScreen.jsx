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
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedData, setSearchedData] = useState(data);

  useEffect(() => {
    filterByCategory(categories[0].id);
  }, []);

  const onPressCardHandler = obj => {
    setItem(obj);
    setVisible(true);
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
    props.addProduct(product);
  };
  const setProductCount = (product, count) => {
    props.changeCount(product, count);
  };

  const getProductsCount = () => {
    const count =
      props.basket.products.find(p => p.product.id == item?.id)?.count || 1;
    return count;
  };

  const onInputChangeHandler = searchString => {
    setSearchQuery(searchString);
    const data = [];
    for (let i = 0; i < props.products.products.length; i++) {
      if (props.products.products[i].name?.includes(searchString)) {
        data.push(props.products.products[i]);
      }
    }
    setSearchedData(data);
  };

  return (
    <>
      <UiContainerHome>
        <View style={styles.header}>
          <Text style={styles.limitLabel}>Меню</Text>
          <View style={styles.limitPrice}>
            <Text
              style={
                props.basket.totalCost > 230
                  ? styles.limitCountRed
                  : styles.limitCount
              }>
              {props.basket.totalCost}
            </Text>
            <UiIcon
              iconName="ruble"
              iconColor={props.basket.totalCost > 230 ? 'red' : '#333333'}
              style={styles.icon}
              iconSize={24}
            />
          </View>
        </View>
        <View>
          <View style={{paddingHorizontal: width(20)}}>
            <UiSearch
              value={searchQuery}
              onInputChangeHandler={onInputChangeHandler}
            />
          </View>
          {searchQuery.length == 0 && (
            <View style={styles.dropdown}>
              <UiDropdown
                titleDropdown={categories[0].categoryName}
                items={categories}
                filter={filterByCategory}
              />
            </View>
          )}
        </View>
        <View style={styles.mainList}>
          <FlatList
            contentContainerStyle={{
              paddingHorizontal: width(20),
              paddingTop: height(12),
            }}
            data={searchQuery.length > 0 ? searchedData : filterData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </UiContainerHome>
      {visible && (
        <InfoModal
          product={item}
          addToBasket={addProductCallback}
          isVisible={visible}
          closeModal={closeModalCallback}
          setProductCount={setProductCount}
          count={getProductsCount()}
        />
      )}
    </>
  );
};

const mapStateToProps = store => ({
  products: store.products,
  categories: store.categories,
  basket: store.basket,
});

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addProductAction(product)),
  changeCount: (product, count) =>
    dispatch(changeProductCountAction(product, count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
