import React, {useEffect, useState} from 'react';
import {UiContainer, UiContainerWP, UiIcon} from '../../components/ui-kit';
import {styles} from './HistoryScreenStyle';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {height, width} from '../../utils/Responsive';
import {HistoryCard, HistoryCardDay} from '../../components';
import {getHistoryAction} from '../../store/actions/historyAction';
import {connect} from 'react-redux';
import {formatDate} from '../../utils/utilits';
import {orderFetch} from '../../http/historyService';

const HistoryScreen = props => {
  const getToday = () => {
    const today = new Date();
    const mm =
      today.getMonth() + 1 > 8
        ? today.getMonth() + 1
        : '0' + (today.getMonth() + 1);
    const dd = today.getDate() > 9 ? today.getDate() : '0' + today.getDate();
    const formatedDate = `${today.getFullYear()}-${mm}-${dd}`;
    return formatedDate;
  };

  useEffect(() => {
    props.getHistory(props.user.user.id);
  }, []);
  const todayOrder = props.history.orders.find(
    order => order.date_order == '2022-05-30',
    //  == getToday(),
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
          params: {
            // products: item.products,
            products: item,
            orderDate: formatDate(item.date_order),
            orderId: props.user.user.id,
          },
        })
      }>
      <HistoryCard price={item.cost} date={formatDate(item.date_order)} />
    </TouchableOpacity>
  );
  const filterOrders = props.history.orders.filter(
    order => order.date_order != getToday(),
  );

  console.log(filterOrders);
  return (
    <>
      <UiContainerWP>
        <View style={styles.title}>
          <TouchableOpacity onPress={goToProfile} style={styles.titleIcon}>
            <UiIcon iconName="arrowLeft" iconColor="#333333" />
          </TouchableOpacity>
          <Text style={styles.titleText}>История заказов</Text>
        </View>
        {todayOrder && (
          <TouchableOpacity
            style={styles.cardOnDay}
            onPress={() =>
              props.navigation.navigate('OrderScreen', {
                params: {
                  products: props.history.orders,
                  // products: todayOrder.products,
                  orderDate: formatDate(todayOrder.date_order),
                  id: props.user.user.id,
                },
              })
            }>
            <HistoryCardDay
              price={todayOrder.cost}
              // date={formatDate(todayOrder.date_order)}
              id={todayOrder.id}
              date="2022-05-29"
              deleteOrderCallback={deleteOrderCallback}
            />
          </TouchableOpacity>
        )}
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: width(20),
            paddingTop: height(12),
          }}
          data={filterOrders}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
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
