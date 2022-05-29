import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {Provider} from 'react-redux';
import reduxStore from './store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {rootSaga} from './sagas';
import AppNavigation from './navigation/AppNavigation';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import NotifService from './http/NotifService';

const App = () => {
  const {store, persistor, sagaMiddleware} = reduxStore();
  sagaMiddleware.run(rootSaga);
  const {configure, showNotification} = NotifService();

  const getPushData = async message => {
    PushNotification.localNotification({
      channelId: 'channel-id',
      message: message.notification.body,
      title: message.notification.title,
    });
    console.log(message);
  };

  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('token', token);
  };

  useEffect(() => {
    getToken();
  }, []);

  messaging().onMessage(getPushData);
  messaging().setBackgroundMessageHandler(getPushData);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
