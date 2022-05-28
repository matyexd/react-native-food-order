import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {UiIcon, UiButton} from '../../components/ui-kit';
import {styles} from './BasketScreenStyle';
import {connect} from 'react-redux';
import {height, width} from '../../utils/Responsive';
import {
  changeProductCountAction,
  clearBasketAction,
  deleteProductAction,
} from '../../store/actions/basketActions';
import {SBasketCard} from '../../components';
import {createOrderRequest} from '../../http/orderService';
import {getNextWorkingDay} from '../../utils/utilits';

const BasketScreen = props => {
  const getOrderDate = async () => {
    const orderDate = await getNextWorkingDay();
    return orderDate;
  };
  const setProductCount = (product, count) => {
    props.changeCount(product, count);
  };

  const deleteProductFromBasket = product => {
    props.deleteProduct(product);
  };
  const renderItem = ({item}) => (
    <View style={styles.card} key={item.id}>
      <SBasketCard
        product={item.product}
        count={item.count}
        setCount={setProductCount}
        deleteProduct={deleteProductFromBasket}
      />
    </View>
  );
  const createOrder = async () => {
    const date = await getOrderDate();
    const basket = props.products.products.map(product => {
      return {
        quantity: product.count,
        dish_id: product.product.id,
      };
    });
    const res = await createOrderRequest(basket, date);
    if (res) {
      console.log('success');
    }
  };
  return (
    <>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.limitLabel}>Корзина</Text>
          <View style={styles.limitPrice}>
            <Text
              style={
                props.products.totalCost > 230
                  ? styles.limitCountRed
                  : styles.limitCount
              }>
              {props.products.totalCost}
            </Text>
            <UiIcon
              iconName="ruble"
              iconColor={props.products.totalCost > 230 ? 'red' : '#333333'}
              style={styles.icon}
              iconSize={24}
            />
          </View>
        </View>
        <View style={styles.card}>
          <FlatList
            contentContainerStyle={{
              paddingHorizontal: width(20),
              paddingTop: height(12),
            }}
            data={props.products.products}
            renderItem={renderItem}
            keyExtractor={item => item.product.id + 'b'}
          />
        </View>
      </View>
      <View style={styles.button}>
        <UiButton
          text="Оформить заказ"
          disabled={props.products.totalCost > 230 ? true : false}
          style={props.products.totalCost > 230 ? styles.buttonDisable : {}}
          onPress={createOrder}
        />
      </View>
    </>
  );
};

const mapStateToProps = state => ({products: state.basket});

const mapDispatchToProps = dispatch => ({
  changeCount: (product, count) =>
    dispatch(changeProductCountAction(product, count)),
  deleteProduct: product => dispatch(deleteProductAction(product)),
  clearBasket: () => dispatch(clearBasketAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(BasketScreen);
