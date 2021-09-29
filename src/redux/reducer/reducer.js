import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import all reducers
import authReducer from './authReducer';
import vehicleReducer from './vehicleReducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

// const vehiclePersistConfig = {
//   key: 'vehicle',
//   storage: AsyncStorage,
// };

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  // vehicle: persistReducer(vehiclePersistConfig, vehicleReducer),
  vehicle: vehicleReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
