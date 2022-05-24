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
} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import reduxStore from './store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {rootSaga} from './sagas';
import RNBootSplash from 'react-native-bootsplash';
import $api from './http';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={props => CustomTabs(props)}
      initialRouteName="Home">
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
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
const App = () => {
  const [initialNavigator, setInitialNavigator] = useState('Auth');
  const [initialNavigatorLoading, setInitialNavigatorLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const data = await $api.get('/user');
        console.log(data);
        await setInitialNavigator('TabNavigator');
      } catch (e) {
        console.log(e);
      }
    };
    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      await setInitialNavigatorLoading(false);
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);

  const {store, persistor, sagaMiddleware} = reduxStore();
  sagaMiddleware.run(rootSaga);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {!initialNavigatorLoading && (
          <NavigationContainer>
            <Stack.Navigator initialRouteName={initialNavigator}>
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
        )}
      </PersistGate>
    </Provider>
  );
};

export default App;
