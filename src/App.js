import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import reduxStore from './store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {rootSaga} from './sagas';
import AppNavigation from './navigation/AppNavigation';
import {
  NotificationListner,
  requestUserPermission,
} from './utils/pushNotificationHelper';
import {StatusBar} from 'react-native';

const App = () => {
  const {store, persistor, sagaMiddleware} = reduxStore();
  sagaMiddleware.run(rootSaga);

  // useEffect(() => {
  //   requestUserPermission();
  //   NotificationListner;
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={'black'} />
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
