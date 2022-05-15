import React from 'react';
import {View, Text, FlatList} from 'react-native';
import SBasketCard from '../../components/SBasketCard';
import {
  UiCounter,
  UiDropdown,
  UiContainer,
  UiIcon,
  UiButton,
} from '../../components/ui-kit';
import {data} from '../../temp/menu';
import {styles} from './BasketScreenStyle';
import {connect} from 'react-redux';
import {height, width} from '../../utils/Responsive';
import {changeProductCountAction} from '../../store/actions/basketActions';

const BasketScreen = props => {
  // console.log(props.products.products[0]);

  const setProductCount = (product, count) => {
    props.changeCount(product, count);
  };

  const renderItem = ({item}) => (
    <View style={styles.card} key={item.id}>
      <SBasketCard
        product={item.product}
        count={item.count}
        setCount={setProductCount}
      />
    </View>
  );

  return (
    <>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.limitLabel}>Корзина</Text>
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
        <UiButton text="Оформить заказ" />
      </View>
    </>
  );
};

const mapStateToProps = state => ({products: state.basket});
const mapDispatchToProps = dispatch => ({
  changeCount: (product, count) =>
    dispatch(changeProductCountAction(product, count)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BasketScreen);
