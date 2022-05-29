import React, {useEffect} from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {OrderCard} from '../../components';
import {UiContainerWP, UiIcon} from '../../components/ui-kit';
import {getOrderAction} from '../../store/actions/historyAction';
import {height, width} from '../../utils/Responsive';
import {styles} from './OrderScreenStyle';

const OrderScreen = props => {
  console.log(props.route.params.params.products.dishes);
  const products = props.route.params.params.products.dishes;
  // useEffect(() => {
  //   props.getOrder(props.route.params.params.orderId);
  // }, []);

  const renderItem = ({item}) => (
    <View style={styles.card} key={item.id}>
      <OrderCard
        price={item.price}
        date={item.date}
        name={item.name}
        calories={item.calories}
        weight={item.weight}
        image={item.image}
        quantity={item.quantity}
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
// const mapStateToProps = store => ({
//   order: store.order,
// });
// const mapDispatchToProps = dispatch => ({
//   getOrder: orderId => dispatch(getOrderAction(orderId)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(OrderScreen);
export default OrderScreen;
