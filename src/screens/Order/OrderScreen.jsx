import React, {useEffect} from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';
import {connect} from 'react-redux';
import {OrderCard} from '../../components';
import {UiContainerWP, UiIcon} from '../../components/ui-kit';
import {
  clearOrderAction,
  getOrderAction,
} from '../../store/actions/historyAction';
import {height, width} from '../../utils/Responsive';
import {formatDate} from '../../utils/utilits';
import {styles} from './OrderScreenStyle';

const OrderScreen = props => {
  useEffect(() => {
    props.getOrder(props.route.params.orderId);
    return () => {
      props.clearOrder();
    };
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.card} key={item.id}>
      <OrderCard
        price={item.price}
        date={item.date}
        name={item.name}
        calories={item.calories}
        weight={item.weight}
        image={item.image}
        quantity={item.pivot.quantity}
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
            Заказ на {formatDate(props.route.params.orderDate)}
          </Text>
        </View>
        {props.order.loading ? (
          <UIActivityIndicator color={'#AAAAAA'} size={30} />
        ) : (
          <FlatList
            contentContainerStyle={{
              paddingHorizontal: width(20),
              paddingTop: height(12),
            }}
            data={props.order.order.dishes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </UiContainerWP>
    </>
  );
};
const mapStateToProps = store => ({
  order: store.order,
});
const mapDispatchToProps = dispatch => ({
  getOrder: orderId => dispatch(getOrderAction(orderId)),
  clearOrder: () => dispatch(clearOrderAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderScreen);
