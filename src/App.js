import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ProfileScreen,
  AuthenticationScreen,
  BasketScreen,
  CustomTabs,
  SplashScreen,
} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import reduxStore from './store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

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
  const {store, persistor} = reduxStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'TabNavigator'}>
            <Stack.Screen
              name="Auth"
              component={AuthenticationScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
