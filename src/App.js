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
  const {configure, createDefaultChannels, showNotification} = NotifService();

  const getPushData = async message => {
    showNotification(
      message.messageId,
      message.notification.title,
      message.notification.body,
      {},
    );
    console.log(message);
  };

  useEffect(() => {
    createDefaultChannels();
    configure();
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
