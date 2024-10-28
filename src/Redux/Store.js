import storage from 'redux-persist/lib/storage';
import persistReducer from './../../node_modules/redux-persist/es/persistReducer';
import { createStore } from './../../node_modules/redux/src/createStore';
import persistStore from './../../node_modules/redux-persist/es/persistStore';

const persistConfig ={
    key:'root',
   storage
}
const persistedReducer=persistReducer(persistConfig,rootReducer);


export const store = createStore(persistedReducer);
export  const persistor =persistStore(store);