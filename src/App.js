import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {Provider} from 'react-redux';
import reduxStore from './store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {rootSaga} from './sagas';
import AppNavigation from './navigation/AppNavigation';
import {
  NotificationListner,
  requestUserPermission,
} from './utils/pushNotificationHelper';

const App = () => {
  const {store, persistor, sagaMiddleware} = reduxStore();
  sagaMiddleware.run(rootSaga);

  useEffect(() => {
    requestUserPermission();
    NotificationListner;
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
