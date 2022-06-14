import React, {useState} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {UiIcon, UiButton} from '../../components/ui-kit';
import {styles} from './BasketScreenStyle';
import {connect} from 'react-redux';
import {height, width} from '../../utils/Responsive';
import {
  changeProductCountAction,
  clearBasketAction,
  deleteProductAction,
} from '../../store/actions/basketActions';
import {
  ModalMessageFailed,
  ModalMessageSuccess,
  SBasketCard,
} from '../../components';
import {createOrderRequest} from '../../http/orderService';
import {getTomorrow} from '../../utils/utilits';
import {getMaxPriceAction} from '../../store/actions/settingAction';

const BasketScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const setModalVisibleCallback = visible => {
    setModalVisible(visible);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [modalFailedVisible, setModalFailedVisible] = useState(false);
  const setModalFailedVisibleCallback = visible => {
    setModalFailedVisible(visible);
  };
  const [textError, setTextError] = useState();
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
    setIsLoading(true);
    const date = getTomorrow();
    const basket = props.products.map(product => {
      return {
        quantity: product.count,
        dish_id: product.product.id,
      };
    });
    const res = await createOrderRequest(basket, date);
    console.log(res);
    if (res?.status > 199 && res.status < 300) {
      props.clearBasket();
      setModalVisible(true);
      setTextError('Заказ успешно отправлен');
    } else if (
      res?.data?.errors &&
      res?.data?.errors[0] === 'Order has been created'
    ) {
      setModalFailedVisible(true);
      setTextError('Заказ уже был создан');
    } else if (
      res?.data?.errors &&
      res?.data?.errors[0] === 'order time expired'
    ) {
      setModalFailedVisible(true);
      setTextError('Время оформления заказа вышло');
    } else if (
      res?.data?.errors &&
      res?.data?.errors[0] === 'can`t order on weekends'
    ) {
      setModalFailedVisible(true);
      setTextError('Создание заказа в выходной день недоступно');
    } else {
      setModalFailedVisible(true);
      setTextError('Заказ не отправлен, попробуйте позже');
    }
    setIsLoading(false);
  };

  return (
    <>
      <SafeAreaView style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.limitLabel}>Корзина</Text>
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
              iconColor={props.totalCost > props.maxPrice ? 'red' : '#333333'}
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
            data={props.products}
            renderItem={renderItem}
            keyExtractor={item => item.product.id + 'b'}
          />
        </View>
      </SafeAreaView>
      <View style={styles.button}>
        <UiButton
          text="Оформить заказ"
          disabled={props.totalCost > props.maxPrice || props.totalCost === 0}
          style={
            props.totalCost > props.maxPrice || props.totalCost === 0
              ? styles.buttonDisable
              : {}
          }
          onPress={createOrder}
          isLoading={isLoading}
        />
      </View>
      <ModalMessageSuccess
        modalVisible={modalVisible}
        setModalVisible={setModalVisibleCallback}
        text={textError}
      />
      <ModalMessageFailed
        modalVisible={modalFailedVisible}
        setModalVisible={setModalFailedVisibleCallback}
        text={textError}
      />
    </>
  );
};

const mapStateToProps = store => ({
  totalCost: store.basket.totalCost,
  products: store.basket.products,
  maxPrice: store.setting.maxPrice,
});

const mapDispatchToProps = dispatch => ({
  changeCount: (product, count) =>
    dispatch(changeProductCountAction(product, count)),
  deleteProduct: product => dispatch(deleteProductAction(product)),
  clearBasket: () => dispatch(clearBasketAction()),
  getMaxPrice: () => dispatch(getMaxPriceAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(BasketScreen);
