import React, {useEffect, useState} from 'react';
import {UiContainer, UiContainerWP, UiIcon} from '../../components/ui-kit';
import {styles} from './HistoryScreenStyle';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {height, width} from '../../utils/Responsive';
import {HistoryCard, HistoryCardDay} from '../../components';
import {getHistoryAction} from '../../store/actions/historyAction';
import {connect} from 'react-redux';
import {formatDate, getTomorrow} from '../../utils/utilits';
import {orderFetch} from '../../http/historyService';
import {UIActivityIndicator} from 'react-native-indicators';

const HistoryScreen = props => {
  useEffect(() => {
    props.getHistory(props.user.user.id);
  }, []);
  const nextOrder = props.history.orders.find(
    order => order.date_order == getTomorrow(),
  );

  const deleteOrderCallback = () => {
    props.getHistory(props.user.user.id);
  };
  const goToProfile = () => {
    props.navigation.navigate('ProfileMain');
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      key={item.id}
      onPress={() =>
        props.navigation.navigate('OrderScreen', {
          products: item,
          orderDate: item.date_order,
          orderId: item.id,
        })
      }>
      <HistoryCard price={item.cost} date={formatDate(item.date_order)} />
    </TouchableOpacity>
  );
  const filterOrders = props.history.orders.filter(
    order => order.date_order != getTomorrow(),
  );
  return (
    <>
      <UiContainerWP>
        <View style={styles.title}>
          <TouchableOpacity onPress={goToProfile} style={styles.titleIcon}>
            <UiIcon iconName="arrowLeft" iconColor="#333333" />
          </TouchableOpacity>
          <Text style={styles.titleText}>История заказов</Text>
        </View>
        {nextOrder && (
          <TouchableOpacity
            style={styles.cardOnDay}
            onPress={() =>
              props.navigation.navigate('OrderScreen', {
                products: props.history.orders[0],
                // products: nextOrder.products,
                orderDate: nextOrder.date_order,
                orderId: nextOrder.id,
              })
            }>
            <HistoryCardDay
              price={nextOrder.cost}
              date={formatDate(nextOrder.date_order)}
              id={nextOrder.id}
              deleteOrderCallback={deleteOrderCallback}
            />
          </TouchableOpacity>
        )}
        {props.history.loading ? (
          <UIActivityIndicator color={'#AAAAAA'} size={30} />
        ) : (
          <FlatList
            contentContainerStyle={{
              paddingHorizontal: width(20),
              paddingTop: height(12),
            }}
            data={filterOrders}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </UiContainerWP>
    </>
  );
};
const mapStateToProps = store => ({
  history: store.history,
  user: store.authUser,
});

const mapDispatchToProps = dispatch => ({
  getHistory: userId => dispatch(getHistoryAction(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
