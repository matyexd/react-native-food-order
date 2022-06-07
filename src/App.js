import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import reduxStore from './store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {rootSaga} from './sagas';
import {Platform} from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import {StatusBar} from 'react-native';
import {NotificationListner} from './utils/pushNotificationHelper';
const App = () => {
  const {store, persistor, sagaMiddleware} = reduxStore();
  sagaMiddleware.run(rootSaga);

  useEffect(() => {
    if (Platform.OS !== 'ios') {
      NotificationListner();
    }
  }, []);

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
