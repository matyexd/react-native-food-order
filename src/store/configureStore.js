import {createStore} from 'redux';
import {rootReducer} from './reducers';
import {rootSaga} from '../sagas';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['basket'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
    const persistor = persistStore(store);
    sagaMiddleware.run(persistor);
    return {store, persistor};
};
