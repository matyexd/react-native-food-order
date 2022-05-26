import React, {useEffect, useState} from 'react';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ProfileScreen,
  AuthenticationScreen,
  BasketScreen,
  CustomTabs,
  SplashScreenAfterAuth,
  HistoryScreen,
  OrderScreen,
} from './../screens';
import {createStackNavigator} from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';
import {checkLogin} from '../store/actions/authAction';
import {connect} from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = routeName => {
  return (
    <Stack.Navigator initialRouteName="ProfileMain">
      <Stack.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="History"
        component={HistoryScreen}
        options={{headerShown: false}}
        listeners={({navigation, route}) => ({
          blur: () => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{name: 'ProfileMain'}],
              }),
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={props => CustomTabs(props)}
      initialRouteName="Home">
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Basket"
        component={BasketScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = props => {
  useEffect(() => {
    const init = async () => {
      props.checkIsAuthUser();
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);

  console.log(props.userAuth);

  return (
    !props.userAuth.isLoadingSplash && (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={!props.userAuth.isAuth ? 'Auth' : 'Splash'}>
          <Stack.Screen
            name="Auth"
            component={AuthenticationScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Splash"
            component={SplashScreenAfterAuth}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OrderScreen"
            component={OrderScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

const mapStateToProps = store => ({
  userAuth: store.authUser,
});

const mapDispatchToProps = dispatch => ({
  checkIsAuthUser: () => dispatch(checkLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
