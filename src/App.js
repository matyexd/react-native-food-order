import React from 'react';
import {Provider} from 'react-redux';
import reduxStore from './store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {rootSaga} from './sagas';
import AppNavigation from './navigation/AppNavigation';

const App = () => {
  const {store, persistor, sagaMiddleware} = reduxStore();
  sagaMiddleware.run(rootSaga);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
