import React, {useEffect, useState} from 'react';
import { NavigationContainer} from '@react-navigation/native';
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
  AboutAppScreen,
} from './../screens';
import {createStackNavigator} from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';
import {checkLogin} from '../store/actions/authAction';
import {connect} from 'react-redux';
import useUploadData from '../hooks/useUploadData';
import {
  getCategoriesAction,
  getMenuActions,
} from '../store/actions/menuActions';

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
      />
      <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{headerShown: false}}
        unmountOnBlur={true}
      />
      <Stack.Screen
        name={'AboutApp'}
        component={AboutAppScreen}
        options={{headerShown: false}}
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
        options={{headerShown: false, unmountOnBlur: true}}
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
  const [loadingBootSplash, setLoadingBootSplash] = useState(true);
  const isUploadData = useUploadData(
    props.userAuth,
    props.products,
    props.categories,
  );

  useEffect(() => {
    props.checkIsAuthUser();
  }, []);

  useEffect(() => {
    RNBootSplash.getVisibilityStatus().then(status => {
      if (status === 'hidden') {
        setLoadingBootSplash(false);
      } else {
        setLoadingBootSplash(true);
      }
    });

    if (loadingBootSplash && props.userAuth.isAuth) {
      // Вызываем подгрузку данных
      props.getMenu('2022-12-13');
      props.getCategories();
    }
    if (isUploadData) {
      RNBootSplash.hide({fade: true});
    }
  }, [props.userAuth, isUploadData]);

  const splashAuthUser = () => {
    if (props.userAuth.isWasLogin) {
      return 'Splash';
    } else {
      return 'TabNavigator';
    }
  };

  const splashNotAuthUser = () => {
    RNBootSplash.hide({fade: true});
    return 'Auth';
  };

  return (
    !props.userAuth.isLoadingSplash && (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={
            !props.userAuth.isAuth ? splashNotAuthUser() : splashAuthUser()
          }>
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
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

const mapStateToProps = store => ({
  userAuth: store.authUser,
  products: store.products,
  categories: store.categories,
});

const mapDispatchToProps = dispatch => ({
  checkIsAuthUser: () => dispatch(checkLogin()),
  getMenu: date => dispatch(getMenuActions(date)),
  getCategories: () => dispatch(getCategoriesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
