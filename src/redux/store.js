import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/reducer';
import {persistStore} from 'redux-persist';

const persistedStore = () => {
  const reduxStore = createStore(rootReducer, applyMiddleware(thunk));
  const persistor = persistStore(reduxStore);

  return {reduxStore, persistor};
};

export default persistedStore;
