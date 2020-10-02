import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(persistedReducer, composeWithDevTools(middleware));
export const persistor = persistStore(store);

export default store;