import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Platform} from 'react-native';
import {
  UiIcon,
  UiSearch,
  UiDropdown,
  UiContainerHome,
} from '../../components/ui-kit';
import {styles} from './HomeScreenStyle';
import {height, width} from '../../utils/Responsive';
import {
  addProductAction,
  changeProductCountAction,
} from '../../store/actions/basketActions';
import {connect} from 'react-redux';
import {SDishCard, SModal} from '../../components';
import {UIActivityIndicator} from 'react-native-indicators';
import {getMaxPriceAction} from '../../store/actions/settingAction';
import {
  requestUserPermission,
} from '../../utils/pushNotificationHelper';
import {useDebouncedCallback} from 'use-debounce';

const HomeScreen = props => {
  const categories = props.categories.categories;
  const data = props.products.products;

  const [item, setItem] = useState();
  const [visible, setVisible] = useState(false);
  const [filterData, setFilterData] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedData, setSearchedData] = useState(data);

  useEffect(() => {
    filterByCategory(categories[0]?.id);
  }, [props.categories, props.products]);

  useEffect(() => {
    props.getMaxPrice();
    if (Platform.OS !== 'ios') {
      requestUserPermission();
    }
  }, []);
  const onPressCardHandler = obj => {
    setItem(obj);
    setVisible(true);
  };

  const closeModalCallback = () => {
    setVisible(false);
  };

  const renderItem = ({item}) => (
    <SDishCard
      product={item}
      addToBasket={addProductCallback}
      style={styles.card}
      key={item.id}
      onPress={() => onPressCardHandler(item)}
      disabled={!!props.basket.find(p => item.id == p.product.id)}
    />
  );
  const filterByCategory = category => {
    if (!category) return;
    const newData = data.filter(pr => pr.category_id === category);
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
      props.basket.find(p => p.product.id == item?.id)?.count || 1;
    return count;
  };
  const debounce = useDebouncedCallback(searchString => {
    const data = [];
    for (let i = 0; i < props.products.products.length; i++) {
      if (
        props.products.products[i].name
          ?.toLowerCase()
          .includes(searchString.toLowerCase())
      ) {
        data.push(props.products.products[i]);
      }
    }
    setSearchedData(data);
  }, 1000);
  const onSearchChangeHandler = searchString => {
    setSearchQuery(searchString);
    debounce(searchString);
    if (searchString.length == 0) filterByCategory(categories[0]?.id);
  };

  return (
    <>
      <UiContainerHome>
        <View style={styles.header}>
          <Text style={styles.limitLabel}>Меню</Text>
          <View style={styles.limitPrice}>
            <Text
              style={
                props.totalCost > props.maxPrice
                  ? styles.limitCountRed
                  : styles.limitCount
              }>
              {props.totalCost}
            </Text>
            <UiIcon
              iconName="ruble"
              iconColor={
                props.totalCost > props.maxPrice ? 'red' : '#333333'
              }
              style={styles.icon}
              iconSize={24}
            />
          </View>
        </View>
        <View>
          <View style={{paddingHorizontal: width(20)}}>
            <UiSearch
              value={searchQuery}
              onInputChangeHandler={onSearchChangeHandler}
            />
          </View>
          {searchQuery.length == 0 && (
            <View style={styles.dropdown}>
              <UiDropdown
                titleDropdown={categories[0]?.name}
                items={categories}
                filter={filterByCategory}
              />
            </View>
          )}
        </View>
        <View style={styles.mainList}>
          {props.products.loading ? (
            <UIActivityIndicator color={'#AAAAAA'} size={30} />
          ) : (
            <FlatList
              contentContainerStyle={{
                paddingHorizontal: width(20),
                paddingTop: height(12),
              }}
              data={searchQuery.length > 0 ? searchedData : filterData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          )}
        </View>
      </UiContainerHome>
      {visible && (
        <SModal
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
  basket: store.basket.products,
  totalCost:store.basket.totalCost,
  maxPrice: store.setting.maxPrice,
});

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addProductAction(product)),
  changeCount: (product, count) =>
    dispatch(changeProductCountAction(product, count)),
  getMaxPrice: () => dispatch(getMaxPriceAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
